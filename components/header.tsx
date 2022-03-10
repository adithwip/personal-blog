import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight text-indigo-600 md:text-4xl md:tracking-tighter">
      <Link href="/">
        <a className="hover:underline">Back to Home</a>
      </Link>
      .
    </h2>
  )
}

export default Header
