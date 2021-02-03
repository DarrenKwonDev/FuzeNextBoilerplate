import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface IProps {
  styleTags: Array<React.ReactElement<{}>>;
}

export default class MyDocument extends Document<IProps> {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();
    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();
    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="format-detection" content="telephone=no"></meta>
          <meta name="theme-color" content="#000000" />
          {/* <meta name="author" content="edupopkorn@edupopkorn.com" /> */}
          {/* <meta name="description" content="EduPopKorn" /> */}
          {/* <meta name="keywords" content="EduPopKorn Korean Learning Education" /> */}

          {/* <meta property="og:title" content="EduPopKorn" /> */}
          <meta property="og:type" content="website" />
          {/* <meta property="og:description" content="EduPopKorn" /> */}
          {/* <meta property="og:image" content="/thumbnail.png" /> */}
          {/* <meta property="og:url" content="https://www.edupopkorn.com" /> */}

          {/* googld font...? */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;1,500&family=Montserrat&display=swap" rel="stylesheet" />

          {/* GA should be here */}

          {/* fontawesome */}
          <script src="https://kit.fontawesome.com/d7e3d29952.js" crossOrigin="anonymous"></script>
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
