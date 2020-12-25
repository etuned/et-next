import { sanity } from '../lib/client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import Image from 'next/image'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Link from 'next/link'

const builder = imageUrlBuilder(sanity)

function urlFor(source) {
  return builder.image(source)
}

const IndexPage = ({data, posts}) => {
  const { siteTitle = 'Missing site title', heroImageUrl = 'http://via.placeholder.com/550x350', heroImage} = data
  const postsSix = posts.slice(0, 6)
   return (
    <div className='container'>
       <nav className='p-1 flex justify-space-around items-center w-full text-black h-12 fixed top-0 bg-white'>
           <Image
             src={heroImageUrl}
             alt={heroImage.alt}
             height={50}
             width={50}
             priority
             layout='fixed'
           />
           <p className='font-body'>{siteTitle}</p>
           <div className='flex-grow'></div>
           <p>hi</p>
        </nav>
      <div className="hero">
        <div className="bg-image">
          <Image
            alt={heroImage.alt || 'Missing an image in the studio'}
            src={heroImageUrl}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
     <div className='flex text-white z-10 mt-5 justify-center items-center flex-col'>
        <div className='h-96 flex justify-center items-center flex-col'>
          <p className='text-5xl z-1'>A Portfolio and Blog</p>
           <p className='text-lg'>by Edwin Bartunek</p> 
        </div>
        </div>
  
    <div className="
          p-4
          dark:bg-gray-900 
          dark:text-gray-50
          bg-white
          grid 
          text-sm 
          text-center
          sm:grid-cols-1 
          sm:grid-rows-4 
          md:grid-cols-2 
          md:grid-rows-4
          lg:grid-cols-2
          lg:grid-rows-2
          2xl:gap-4 
          grid-cols-3 
          grid-rows-3">  
       {postsSix.map((post) => (
          <div key={post._id}>
             <Link href='#'>
              <a className='sm:m-2 md:m-3 m-2 2xl:m-4'>
              <div className="flex rounded-2xl transition duration-300 hover:scale-105 hover:shadow-lg h-64 hover:border-gray-50 hover:border justify-center items-center flex-col">
                <LazyLoadImage
                  threshold={50}
                  useIntersectionObserver='true'
                  className='rounded-2xl w-full rounded-2xl'
                  alt={post.alt}
                  height={150}
                  src={urlFor(post.PostImage)
                    .auto('format')
                    .width(350)
                    .height(150)
                    .url()} 
                  width={350}
                  layout='intrinsic' 
                  placeholderSrc={post.img.metadata.lqip}
                />
                  <p className='h-5'>{post.title}</p>
                  <p className='text-justify p-6 h-30'>
                  <BlockContent className='text-xs text-justify' blocks={post.excerpt} />
                  </p>
                </div>
                </a>
              </Link>
            </div>
            ))} 
           
         </div>
      </div>
    </div>
  )
}
export default IndexPage


export async function getStaticProps() {
  const data = await sanity.fetch(`*[_type == 'siteSettings'][0]{
    'siteTitle': title,
    heroImage, 
    'heroImageUrl': heroImage.asset -> url
  }`)
  const posts = await sanity.fetch(`*[_type == 'post']| order(_createdAt asc){
    _id,
    title,
    excerpt,
    'slug': slug.current,
    "PostImage": mainImage.asset,
    "alt": mainImage.alt,
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
