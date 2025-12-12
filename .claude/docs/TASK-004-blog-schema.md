# TASK-004: Create Sanity Schema - Blog Post

**Objective:** Create the blog post document schema in Sanity CMS.

**Prerequisites:** TASK-003 completed and verified

**Estimated Time:** 30-35 minutes

---

## Background: Sanity Schemas

Schemas define the structure of content in Sanity:

- **Documents** = Main content types (blog posts, services, etc.)
- **Objects** = Reusable fields (SEO settings, rich text, etc.)

We're creating ONE document type (blog post) and its dependencies in this task.

---

## Steps

### 1. Create Block Content Object

This defines rich text editing capabilities.

Create `sanity/schemas/objects/blockContent.ts`:

```typescript
import { defineType, defineArrayMember } from 'sanity';

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
        },
      ],
    }),
  ],
});
```

### 2. Create SEO Object

Create `sanity/schemas/objects/seo.ts`:

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Title for search engines (50-60 characters)',
      validation: (Rule) => Rule.max(60).warning('Should be 60 characters or less'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Description for search engines (150-160 characters)',
      validation: (Rule) => Rule.max(160).warning('Should be 160 characters or less'),
    }),
    defineField({
      name: 'keywords',
      title: 'Focus Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Main keywords for this content',
      options: {
        layout: 'tags',
      },
    }),
  ],
});
```

### 3. Create Blog Post Document

Create `sanity/schemas/documents/post.ts`:

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main blog post title',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly version of title (click Generate)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Featured Image',
      type: 'image',
      description: 'Main image for the blog post',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Describe the image for accessibility and SEO',
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Select one or more categories',
      options: {
        list: [
          { title: 'Visa & Immigration', value: 'visa' },
          { title: 'Living in Spain', value: 'living' },
          { title: 'Real Estate', value: 'real-estate' },
          { title: 'Legal Guides', value: 'legal' },
          { title: 'Expat Life', value: 'expat' },
          { title: 'Culture & Lifestyle', value: 'culture' },
        ],
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      description: 'When this post was/will be published',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      description: 'Short summary for previews (150-200 characters)',
      validation: (Rule) => Rule.max(200).warning('Keep under 200 characters'),
    }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'blockContent',
      description: 'Main blog post content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      description: 'Optional: Override default SEO values',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'publishedAt',
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : 'No date',
        ...selection,
      };
    },
  },
  orderings: [
    {
      title: 'Published Date, Newest',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Published Date, Oldest',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
    {
      title: 'Title, A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
});
```

### 4. Update Schema Index

Update `sanity/schema.ts` to include all schemas:

```typescript
import { type SchemaTypeDefinition } from 'sanity';

// Documents
import post from './schemas/documents/post';

// Objects
import blockContent from './schemas/objects/blockContent';
import seo from './schemas/objects/seo';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    post,

    // Objects
    blockContent,
    seo,
  ],
};
```

### 5. Restart Sanity Studio

Stop and restart Sanity Studio to see the new schema:

```bash
cd sanity
npm run dev
```

---

## Verification Checklist

- [ ] Sanity Studio shows "Blog Post" document type in sidebar
- [ ] Can click "+ Create" → "Blog Post"
- [ ] All fields render correctly in the editor
- [ ] Slug auto-generates from title (click "Generate")
- [ ] Image upload works
- [ ] Categories dropdown shows all 6 options
- [ ] Rich text editor (body) has formatting options
- [ ] SEO section is collapsible
- [ ] No TypeScript errors in terminal

## Review Points

### 1. Test Creating a Blog Post

In Sanity Studio:

1. Click "Create" → "Blog Post"
2. Fill in title: "Test Post"
3. Click "Generate" on slug field
4. Select a category
5. Add some content to body
6. Click "Publish"

Verify:

- Post appears in document list
- Preview shows title and date
- All fields saved correctly

### 2. Field Validations

Test these validations work:

- Title: Required (can't publish without it)
- Slug: Required (can't publish without it)
- Meta Title: Warning at 60 characters
- Meta Description: Warning at 160 characters
- Excerpt: Warning at 200 characters

### 3. Rich Text Editor

Verify blockContent editor has:

- Bold, italic formatting
- Headings (H2, H3, H4)
- Bullet and numbered lists
- Link creation
- Image insertion
- Quote blocks

### 4. Schema File Structure

```
sanity/
├── schemas/
│   ├── documents/
│   │   └── post.ts
│   └── objects/
│       ├── blockContent.ts
│       └── seo.ts
└── schema.ts (imports all schemas)
```

---

## Understanding the Schema

### Document vs Object

**Document** (post.ts)

- Independent content item
- Has its own page in Studio
- Can be published/unpublished
- Shows in content lists

**Object** (blockContent.ts, seo.ts)

- Reusable field groups
- Used inside documents
- Not published independently
- Shared across multiple documents

### Why This Structure?

```
post (document)
├── title (string)
├── slug (slug)
├── body (blockContent) ← Object
└── seo (seo) ← Object
```

Objects make schemas:

- Reusable (use blockContent in posts, pages, etc.)
- Maintainable (change once, affects everywhere)
- Organized (group related fields)

---

## Common Issues & Solutions

**Issue:** "Blog Post" doesn't appear in Studio  
**Solution:** Check that `post` is imported in `schema.ts`

**Issue:** TypeScript error in schema files  
**Solution:** Ensure `sanity` is imported: `import { defineField, defineType } from 'sanity'`

**Issue:** Slug doesn't auto-generate  
**Solution:** Check that `options.source` is set to 'title'

**Issue:** Rich text editor looks different  
**Solution:** That's normal - blockContent creates custom editor

**Issue:** Can't publish post  
**Solution:** Check that required fields (title, slug, body) are filled

---

## Next Steps

After verification passes, proceed to:

- **TASK-005:** Create UI Component Library

---

## Notes for AI Agents

- Create one test blog post to verify everything works
- Don't proceed until you can successfully publish a post
- Keep this test post for development - we'll use it later
- Document any schema modifications in Context7
- This is ONE document type - we'll add more later (Service, Package, Team Member)
