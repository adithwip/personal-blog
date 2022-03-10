import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../utils/gtag'
export default class MyDocument extends Document {
  render() {
    const { isDevelopment } = this.props

    return (
      <Html lang="en">
        <Head>
          {!isDevelopment && (
            <React.Fragment>
              {/* Global site tag (gtag.js) - Google Analytics */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', '${GA_TRACKING_ID}');
                  `,
                }}
              />
            </React.Fragment>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
