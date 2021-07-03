import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col md:flex-row items-center">
          <h3 className="flex-1 text-4xl md:text-5xl font-bold tracking-tighter leading-tight text-center md:text-center mb-10 md:mb-0 md:pr-4">
            Let's connect!
          </h3>
          <div className="flex flex-1 justify-center items-center gap-4 md:pl-4 md:w-1/2">
            <a
              href="https://twitter.com/adith_wp"
              target="_blank"
              rel="noopener noreferer"
              className="font-bold hover:underline"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/adith-widya-pradipta-3a777894/"
              target="_blank"
              rel="noopener noreferer"
              className="font-bold hover:underline"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/adithwip"
              target="_blank"
              rel="noopener noreferer"
              className="font-bold hover:underline"
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
