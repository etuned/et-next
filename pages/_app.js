import { ThemeProvider } from 'next-themes'
import '../styles/global.css'

function etApp({ Component, pageProps }) {
  return (
     <ThemeProvider>
       <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default etApp