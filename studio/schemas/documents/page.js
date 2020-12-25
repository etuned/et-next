import { TiDeviceLaptop } from 'react-icons/ti'

export default {
    name: 'page',
    type: 'document',
    title: 'Page',
    icon: TiDeviceLaptop,
    initialValue: {
      setMastHeader: false
    },
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        description: 'Titles should be catchy, descriptive, and not too long'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        description: 'Some frontends will require a slug to be set to be able to show the post',
        options: {
          source: 'title',
          maxLength: 96
        }
      },
      {
        name: 'setMastHeader',
        type: 'boolean',
        title: 'Set MastHeader'
      },
      {
        name: 'mainImage',
        type: 'mainImage',
        title: 'Main image'
      },
      {
        name: 'body',
        type: 'bodyPortableText',
        title: 'Main Content'
      }
    ]
}
  