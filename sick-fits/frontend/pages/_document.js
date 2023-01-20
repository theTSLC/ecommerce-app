/* eslint-disable react/jsx-props-no-spreading */
import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  // SSR StyledComponents w/ stylesheet rehydration aka SSSR sylesheets
  // prevents FOUC & ensure random id contintuity using StyledComponents components
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en" data-me="dope2023">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
