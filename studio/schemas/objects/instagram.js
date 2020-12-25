import React from 'react'
import InstagramEmbed from 'react-instagram-embed'
import { TiSocialInstagram } from 'react-icons/ti'

const Preview = ({value}) => {
    const { id } = value
    return (<InstagramEmbed maxWidth='100%' url={`https://www.instagram.com/p/${id}/`} />)
}

export default {
  name: 'instagram',
  type: 'object',
  icon: TiSocialInstagram,
  title: 'Instagram Embed',
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'Instagram post ID'
    }
  ],
  preview: {
    select: {
      id: 'id'
    },
    component: Preview
  }
}