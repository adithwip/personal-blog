import type { AppProps } from 'next/app'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as gtag from '../utils/gtag'

import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  /**
   * We follow guides from this repo
   * Repo: https://github.com/montezume/nextjs-google-analytics
   * Repo: https://github.com/vercel/next.js/tree/canary/examples/with-google-analytics
   * Medium Article: https://medium.com/frontend-digest/using-nextjs-with-google-analytics-and-typescript-620ba2359dea
   */
  useEffect(() => {
    // Only trigger Google Analytics on production environment
    if (process.env.NODE_ENV === 'production') {
      const handleRouteChange = (url: URL) => {
        gtag.pageview(url)
      }
      router.events.on('routeChangeComplete', handleRouteChange)

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }, [router.events])

  return <Component {...pageProps} />
}
