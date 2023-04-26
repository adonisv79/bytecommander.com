import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
  <Head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-FRFX2KSZTP"></script>
  </Head>
    <Script id="ga-traking"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-FRFX2KSZTP');
        `
      }}
    />
    <Component {...pageProps} />
  </>)
}
