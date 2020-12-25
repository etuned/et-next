export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site Name'
    },
    {
      name: 'heroImage',
      type: 'heroImage',
      title: 'Hero Image',
      description: 'Shows as a background image on the index page.'
    },
    {
      name: 'innerImage',
      type: 'innerImage',
      title: 'Inner Image',
      description: 'Shows on all inner pages as a header unless a custom Mast Header is set in Pages.'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Publish an author and set a reference to them here.',
      title: 'Author',
      to: [{type: 'author'}]
    }
  ]
}
