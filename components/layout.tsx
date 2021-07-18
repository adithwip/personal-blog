import { ReactNode } from 'react'

import Footer from './footer'
import SEO from './seo'

type Props = {
  children: ReactNode,
  article?: boolean,
  title: string
  description?: string,
  previewImageUrl?: string,
  pathUrl?: string,
}

const Layout = ({
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
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
