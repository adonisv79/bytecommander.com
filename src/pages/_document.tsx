import { Html, Head, Main, NextScript } from 'next/document';
import MainHeader from '../components/Layout/MainHeader';
import MainFooter from '../components/Layout/MainFooter';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <MainHeader />
        <Main />
        <NextScript />
        <MainFooter />
      </body>
    </Html>
  )
}
