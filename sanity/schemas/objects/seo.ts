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
