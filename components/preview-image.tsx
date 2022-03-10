import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  slug: string
}

const PreviewImage = ({ title, src, slug }: Props) => {
  const image = (
    <figure className="relative h-[182px] w-full overflow-hidden rounded-xl bg-indigo-100 md:h-[300px]">
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
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a aria-label={title}>{image}</a>
      </Link>
    </div>
  )
}

export default PreviewImage
