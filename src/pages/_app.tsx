import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
  <Head>
    
  </Head>
    {/* <Script id="gtag" async src="https://www.googletagmanager.com/gtag/js?id=G-FRFX2KSZTP" />
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
    /> */}
    <Script id="smartlookdotcom"
    strategy="beforeInteractive"
     dangerouslySetInnerHTML={{
       __html: `
       window.smartlook||(function(d) {
        var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
        var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
        c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
        })(document);
        smartlook('init', '85d1e36aea729dc2102695f07ff13dfae49213fe', { region: 'eu' });
       `
    }} />
    <Component {...pageProps} />
  </>)
}
