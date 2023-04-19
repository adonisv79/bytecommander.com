import { Html, Head, Main, NextScript } from 'next/document';
import MainHeader from '../components/Layout/MainHeader';
import MainFooter from '../components/Layout/MainFooter';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div 
          className="m-auto justify-center 
            text-center max-w-6xl
        ">
          <MainHeader />
          <Main />
          <NextScript />
          <MainFooter />
        </div>
      </body>
    </Html>
  )
}
