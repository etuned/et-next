import React from "react";
import { sanity } from '../../lib/client'
import imageUrlBuilder from '@sanity/image-url'
import { Box, Text, HStack } from "@chakra-ui/react";
import Image from 'next/image'

const builder = imageUrlBuilder(sanity)

function urlFor(source) {
  return builder.image(source)
}

export default function Logo(props) {
  return (
     <HStack {...props}>
      
      <Text fontSize="lg" fontWeight="bold">
        {props.sitetitle}
      </Text>
      <Image
      src={urlFor(props.logo.asset)
      .url()}
      alt={props.logo.alt}
      height='40px'
      width='40px'
      layout='fixed'
  />
      </HStack>
  );
}