export default function MainFooter() {
  const email = <a href="mailto:adonisv79@gmail.com" subject="Re: Bytecommander">adonisv79@gmail.com</a>;
  return <footer className="m-4 p-2 text-xs text-gray-500 font-medium text-center border">
      The source code for this site and its contents are freely available at <a href="https://github.com/adonisv79/bytecommander.com">my Github page</a>
      <div>
        Bytecommander™ (2011) is owned and maintained by Adonis Lee Villamor<br />
        for concerns on this site, please feel free to contact me at {email}
      </div>
  </footer>
}