import { ChakraProvider } from "@chakra-ui/react"
function etApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default etApp