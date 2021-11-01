import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=option"
            rel="stylesheet"
          /> */}

          <link
            rel="preload"
            href="/fonts/Inter-roman.var.woff2"
            as="font"
            crossOrigin=""
            type="font/woff2"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
