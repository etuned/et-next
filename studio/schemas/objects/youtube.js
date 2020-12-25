import React from 'react'
import { TiSocialYoutube } from 'react-icons/ti'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

const Preview = ({value}) => {
    const opts = {
        width: '100%',
        maxWidth: '580px',
        playerVars: {
          autoplay: 0,
          modestbranding: 1
        },
      };
	const { url } = value
	const id = getYouTubeId(url)
	return (<YouTube videoId={id} opts={opts}/>)
}

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  icon: TiSocialYoutube,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL'
    }
  ],
  preview: {
  	select: {
  		url: 'url'
  	},
  	component: Preview
  }
}