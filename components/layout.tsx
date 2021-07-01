import { ReactNode } from 'react'

import Alert from './alert'
import Footer from './footer'
import SEO from './seo'

type Props = {
  preview?: boolean
  children: ReactNode,
  article?: boolean,
  title: string
  description?: string,
  previewImageUrl?: string,
  pathUrl?: string,
}

const Layout = ({
  preview,
  children,
  article = false,
  title,
  description,
  previewImageUrl,
}: Props) => {
  return (
    <>
      <SEO
        article={article}
        title={title}
        description={description}
        previewImageUrl={previewImageUrl}
      />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
