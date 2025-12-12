# Remaining Sanity Schemas

These are the additional schemas to implement after TASK-004 (Blog Post schema).

---

## Service Schema

**Purpose:** Define service offerings (Visa services, Real Estate services, etc.)

**File:** `sanity/schemas/documents/service.ts`

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      description: 'e.g., "Visa & Residency Services"',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly version (click Generate)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., "Scale", "Home", "FileText", "Briefcase")',
      initialValue: 'FileText',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Brief overview for cards/previews (100-150 characters)',
      validation: (Rule) => Rule.required().max(150),
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'blockContent',
      description: 'Detailed service description',
    }),
    defineField({
      name: 'image',
      title: 'Service Image',
      type: 'image',
      description: 'Optional image for this service',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: "Bullet points of what's included",
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'shortDescription',
      media: 'image',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Title, A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
});
```

---

## Package Schema

**Purpose:** Define pricing packages (Essentials, Complete, Premium)

**File:** `sanity/schemas/documents/package.ts`

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'package',
  title: 'Package',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Package Name',
      type: 'string',
      description: 'e.g., "Essentials Package", "Complete Package"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tier',
      title: 'Tier Level',
      type: 'string',
      description: 'Select the tier for this package',
      options: {
        list: [
          { title: 'Essentials', value: 'essentials' },
          { title: 'Complete', value: 'complete' },
          { title: 'Premium', value: 'premium' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short tagline or subtitle (e.g., "For straightforward moves")',
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price in USD (leave blank for custom pricing)',
    }),
    defineField({
      name: 'priceNote',
      title: 'Price Note',
      type: 'string',
      description: 'e.g., "Starting at", "From", "Custom pricing"',
      initialValue: 'Starting at',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Brief description of who this package is for',
    }),
    defineField({
      name: 'features',
      title: 'Included Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: "List of what's included in this package",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'highlighted',
      title: 'Highlight This Package',
      type: 'boolean',
      description: 'Show as "Most Popular" or "Best Value"',
      initialValue: false,
    }),
    defineField({
      name: 'highlightText',
      title: 'Highlight Label',
      type: 'string',
      description: 'Text to show on highlighted packages (e.g., "Most Popular")',
      hidden: ({ document }) => !document?.highlighted,
    }),
    defineField({
      name: 'ctaText',
      title: 'Button Text',
      type: 'string',
      description: 'Call-to-action button text',
      initialValue: 'Get Started',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order on pricing page (lower = first)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      tier: 'tier',
      highlighted: 'highlighted',
    },
    prepare(selection) {
      const { title, tier, highlighted } = selection;
      return {
        title,
        subtitle: `${tier}${highlighted ? ' • HIGHLIGHTED' : ''}`,
      };
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
```

---

## Team Member Schema

**Purpose:** Team member bios (Attorney, staff)

**File:** `sanity/schemas/documents/teamMember.ts`

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      description: "Team member's full name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role/Title',
      type: 'string',
      description: 'e.g., "Founder & Immigration Attorney"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Professional email address (optional)',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'image',
      title: 'Profile Photo',
      type: 'image',
      description: 'Professional headshot',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'blockContent',
      description: 'Full professional biography',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      rows: 3,
      description: 'Brief bio for cards/previews (150-200 characters)',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'credentials',
      title: 'Credentials & Licenses',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bar admissions, degrees, certifications',
    }),
    defineField({
      name: 'languages',
      title: 'Languages Spoken',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Languages the team member speaks',
    }),
    defineField({
      name: 'specializations',
      title: 'Areas of Expertise',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Legal specializations or focus areas',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter/X',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order on team page (lower = first)',
      initialValue: 0,
    }),
    defineField({
      name: 'featured',
      title: 'Feature on Homepage',
      type: 'boolean',
      description: 'Show this team member on homepage',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Name, A-Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
});
```

---

## Additional Object Schemas (Optional)

### Call to Action Object

**Purpose:** Reusable CTA buttons throughout content

**File:** `sanity/schemas/objects/callToAction.ts`

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'callToAction',
  title: 'Call to Action',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Button Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Link URL',
      type: 'string',
      description: 'Internal (/about) or external (https://...)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'style',
      title: 'Button Style',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Outline', value: 'outline' },
        ],
        layout: 'radio',
      },
      initialValue: 'primary',
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open in New Tab',
      type: 'boolean',
      description: 'For external links',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      text: 'text',
      url: 'url',
      style: 'style',
    },
    prepare(selection) {
      const { text, url, style } = selection;
      return {
        title: text,
        subtitle: `${style} → ${url}`,
      };
    },
  },
});
```

### Testimonial Object

**Purpose:** Client testimonials

**File:** `sanity/schemas/objects/testimonial.ts`

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clientTitle',
      title: 'Client Title/Location',
      type: 'string',
      description: 'e.g., "Business Owner, Madrid" or "Relocated from California"',
    }),
    defineField({
      name: 'photo',
      title: 'Client Photo',
      type: 'image',
      description: 'Optional photo of client',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'quote',
      title: 'Testimonial Quote',
      type: 'text',
      rows: 4,
      description: 'The testimonial text',
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Star rating (1-5)',
      validation: (Rule) => Rule.required().min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: 'featured',
      title: 'Feature on Homepage',
      type: 'boolean',
      description: 'Show this testimonial on homepage',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'quote',
      media: 'photo',
    },
  },
});
```

---

## Updating Schema Index

After creating all schemas, update `sanity/schema.ts`:

```typescript
import { type SchemaTypeDefinition } from 'sanity';

// Documents
import post from './schemas/documents/post';
import service from './schemas/documents/service';
import package from './schemas/documents/package';
import teamMember from './schemas/documents/teamMember';
import testimonial from './schemas/objects/testimonial';

// Objects
import blockContent from './schemas/objects/blockContent';
import seo from './schemas/objects/seo';
import callToAction from './schemas/objects/callToAction';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    post,
    service,
    package,
    teamMember,
    testimonial,

    // Objects
    blockContent,
    seo,
    callToAction,
  ],
};
```

---

## Implementation Order

Implement schemas in this order:

1. **Service** - Needed for services page
2. **Package** - Needed for packages page
3. **Team Member** - Needed for about page
4. **Testimonial** - Needed for homepage
5. **Call to Action** - Optional, can add later

---

## Testing Each Schema

After creating each schema:

1. Restart Sanity Studio
2. Create a test document
3. Fill in all fields
4. Upload test images
5. Publish document
6. Verify preview works
7. Check that ordering works

---

## Usage in Next.js

### Fetching Services

```typescript
// src/lib/sanity/queries.ts
export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    icon,
    shortDescription,
    description,
    image {
      asset->,
      alt
    },
    features
  }
`;
```

### Fetching Packages

```typescript
export const packagesQuery = groq`
  *[_type == "package"] | order(order asc) {
    _id,
    name,
    tier,
    tagline,
    price,
    priceNote,
    description,
    features,
    highlighted,
    highlightText,
    ctaText
  }
`;
```

### Fetching Team Members

```typescript
export const teamQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    email,
    image {
      asset->,
      alt
    },
    bio,
    shortBio,
    credentials,
    languages,
    specializations,
    socialLinks,
    featured
  }
`;
```

### Fetching Testimonials

```typescript
export const testimonialsQuery = groq`
  *[_type == "testimonial" && featured == true] | order(order asc) {
    _id,
    clientName,
    clientTitle,
    photo {
      asset->
    },
    quote,
    rating
  }
`;
```

---

## Notes

- All schemas include `order` field for custom sorting
- All schemas include helpful descriptions for non-technical users
- Images include alt text fields for accessibility
- Validations prevent common mistakes
- Preview configurations make Studio easier to use

Remember to restart Sanity Studio after adding new schemas!
