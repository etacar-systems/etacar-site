import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <link rel='manifest' href='/manifest.json' />

          <meta
            name='description'
            content='EtaCar Systems designs, builds and operates enterprise-grade AI systems for business-critical decisions and processes. Senior AI engineering team with 20+ years of experience - from Autonomy.com to modern LLM architectures. Proven impact on cycle time, error rates and operational risk.'
          />

          <meta property='og:type' content='website' />
          <meta property='og:site_name' content='EtaCar Systems' />
          <meta property='og:title' content='Enterprise AI for Business-Critical Decisions and Processes' />
          <meta
            property='og:description'
            content='Senior AI engineering team with 20+ years of experience - from Autonomy.com to modern LLM systems. We design, build and operate AI solutions with measurable impact on speed, risk and accuracy in regulated environments.'
          />
          <meta property='og:url' content='https://etacar.io' />
          <meta property='og:image' content='/og-image.jpg' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content='Enterprise AI for Business-Critical Decisions' />
          <meta
            name='twitter:description'
            content='EtaCar Systems - senior AI engineering team with 20+ years of experience. We build enterprise AI systems with measurable impact on operational performance and risk.'
          />
          <meta name='twitter:image' content='/twitter-card.jpg' />
          <meta name='format-detection' content='telephone=no' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
