import Document, { Html, Head, Main, NextScript } from "next/document";
import GoogleFonts from "next-google-fonts"

class MyDocument extends Document {
  render() {

    return (
      <Html className='font-sans text-base antialiased'>
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Raleway&display=optional" rel="stylesheet"/>
        </Head>
        <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument