import { sanity } from '../lib/client'
import imageUrlBuilder from '@sanity/image-url'
import { IoIosMenu } from 'react-icons/io'
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri'
import BlockContent from '@sanity/block-content-to-react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Link from 'next/link'
import NavBar from '../components/sections/NavBar'
import Hero from '../components/sections/Hero'

import { 
  Container,
  Box, 
  Wrap,
  WrapItem,
  Text
} from '@chakra-ui/react'


const builder = imageUrlBuilder(sanity)

function urlFor(source) {
  return builder.image(source)
}

const IndexPage = ({data, posts}) => {
  const { siteTitle = 'Missing site title', heroimg = 'http://via.placeholder.com/1200', heroImage, logo, logoUrl = 'http://via.placeholder.com/30x30',} = data
  const postsSix = posts.slice(0, 6)
   return (
     <>
    <NavBar maxWidth='1600px' logo={logo} sitetitle={siteTitle} />
      <Box>
          
          <Hero bgimgsrc={heroimg} alt={heroImage.alt} headline='A Portfolio and Blog' tagline='by Edwin Bartunek'/>
       
    <Wrap spacing="10px" justify="between">
       {postsSix.map((post) => (
          <WrapItem key={post._id}>
                  <Box>
                    <LazyLoadImage
                      threshold={50}
                      useIntersectionObserver='true'
                      className='rounded-2xl w-full rounded-2xl'
                      alt={post.alt}
                      height={150}
                      src={urlFor(post.PostImage)
                        .auto('format')
                        .width(300)
                        .height(200)
                        .url()
                        } 
                      width={300}
                      height={200}
                      layout='intrinsic' 
                      placeholderSrc={post.img.metadata.lqip}
                    />
                      <Text>{post.title}</Text>
                      <Text>
                      <BlockContent className='text-xs text-justify' blocks={post.excerpt} />
                      </Text>
                    </Box>
            </WrapItem>
            ))} 
            </Wrap>
            
  </Box>
</>
  )
}
export default IndexPage


export async function getStaticProps() {
  const data = await sanity.fetch(`*[_type == 'siteSettings'][0]{
    'siteTitle': title,
    logo,
    'logoAlt': logo.alt,
    heroImage,
    'heroimg': heroImage.asset->url
  }`)
  const posts = await sanity.fetch(`*[_type == 'post']| order(_createdAt asc){
    _id,
    title,
    excerpt,
    'slug': slug.current,
    "PostImage": mainImage.asset,
    "alt": mainImage.alt,
    "hotspot": mainImage.hotspot,
    "img": mainImage.asset->{
      metadata {
        lqip
      }
    }
  }`)
  return {
    props: {
      data,
      posts
    },
    revalidate: 1,
  };
}
