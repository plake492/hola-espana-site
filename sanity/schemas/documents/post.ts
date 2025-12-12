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
      const { subtitle } = selection;
      return {
        ...selection,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : 'No date',
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
