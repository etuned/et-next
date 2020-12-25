import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import { TiSocialTwitter } from 'react-icons/ti'

const Preview = ({value}) => {
  const { id } = value
  return (<TwitterTweetEmbed tweetId={id} options={{ conversation: "none" }} />)
}

export default {
  name: 'twitter',
  type: 'object',
  icon: TiSocialTwitter,
  title: 'Twitter Embed',
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'Twitter tweet id'
    }
  ],
  preview: {
    select: {
       id: 'id'
    },
    component: Preview
  }
}