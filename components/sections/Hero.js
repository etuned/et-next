import { Flex, Text, VStack, Stack, Box, Container } from '@chakra-ui/react'
import Image from 'next/image'
import { sanity } from '../../lib/client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanity)

function urlFor(source) {
  return builder.image(source)
}


const Hero = (props) => {
    const { bgimgsrc } = props
    
    return (
    <Box height='80vh'>
        {console.log(props)}

        <Box overflow='hidden' zIndex={-10} position='absolute' top='0' shadow='lg' width='100vw' height={800}>
          <Image 
            src={urlFor(bgimgsrc)
              .auto('format')
              .width(1600)
              .height(600)
              .fit('fillmax')
              .url()}
            alt={props.alt}
            layout='intrinsic'
            objectPosition='center'
            width={1600}
            height={800}
            priority
          />
          </Box>
           
            <VStack height='50vh' top={0} justify='center' align='center'>
                <Text p={1} as='h1'>{props.headline}</Text>
                <Text p={3}>{props.tagline}</Text>
            </VStack>
        </Box>
    )
}

export default Hero