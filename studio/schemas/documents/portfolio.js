import {format} from 'date-fns'
import { TiBusinessCard } from 'react-icons/ti'

export default {
  name: 'portfolio',
  type: 'document',
  title: 'Portfolio',
  icon: TiBusinessCard,
  initialValue: () =>({
    publishedAt: new Date().toISOString(),
    setMastHeader: false,
    "authors": [
      {
        "_type": "authorReference",
        "author": {
          "_ref": "1b1c7451-c976-48fd-b416-73bf5a356f10",
          "_type": "reference"
        }
      }
    ],
  }),
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The full title'
    },
    {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        description: 'Generate for the slug',
        options: {
          source: 'title',
          maxLength: 96
        }
      },
    {
        name: 'file',
        type: 'file',
        title: 'File',
        description: 'upload a PDF of the document'
      },

    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
        name: 'setMastHeader',
        type: 'boolean',
        title: 'Set Main Image as Mast Header',
        description: 'Overrides the inner image in Settings with the image below'

      },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image',
      description: 'Remember to enable the toggle above'

    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.'
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'authorReference'
        }
      ]
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
