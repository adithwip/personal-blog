import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <figure className="relative bg-indigo-100 w-full rounded-xl overflow-hidden h-[182px] md:h-[720px]">
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </figure>
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
