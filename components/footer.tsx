import Container from './container'

const Footer = () => {
  return (
    <footer className="border-t border-accent-2 bg-accent-1">
      <Container>
        <div className="flex flex-col items-center py-28 md:flex-row">
          <h3 className="mb-10 flex-1 text-center text-4xl font-bold leading-tight tracking-tighter text-indigo-600 md:mb-0 md:pr-4 md:text-center md:text-5xl">
            {"Let's connect!"}
          </h3>
          <div className="flex flex-1 items-center justify-center gap-4 md:w-1/2 md:pl-4">
            <a
              href="https://twitter.com/adith_wp"
              rel="noreferrer"
              className="font-bold text-indigo-600 hover:underline"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/adith-widya-pradipta-3a777894/"
              rel="noreferrer"
              className="font-bold text-indigo-600 hover:underline"
            >
              Linkedin
            </a>
            <a
              href="https://www.polywork.com/adith"
              rel="noreferrer"
              className="font-bold text-indigo-600 hover:underline"
            >
              Polywork
            </a>
            <a
              href="https://github.com/adithwip"
              rel="noreferrer"
              className="font-bold text-indigo-600 hover:underline"
            >
              Github
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
