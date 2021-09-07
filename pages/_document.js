import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" type="image/icon" href="/favicon.icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
            rel="stylesheet"
          />
          <link
            href="https://cdn.materialdesignicons.com/5.0.45/css/materialdesignicons.min.css"
            rel="stylesheet"
          />
        </Head>
        <body
          style={{ fontFamily: `'Poppins', sans-serif` }}
          className="overflow-x-hidden"
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
