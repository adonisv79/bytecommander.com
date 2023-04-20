import Link from 'next/link'

export default function MainFooter() {

  return <footer id="footer" className="grid md:grid-cols-2  lg:grid-cols-4 m-16 p-4">
    <div className="mt-8 text-center md:text-start">
      <h3>About Me</h3>
      <p className=' mb-1'>I have been in various roles and fields particularly in tech as a developer, delivery and management. I have tested and worked on multiple technologies as well which has helped in my adaptability and understanding of various concepts and frameworks.</p>
      <p>Career-wise I am focused only on technology or people-management. I am always open to explore an work for the best who also values the best people.</p>

    </div>
    <div id="portfolio" className='mt-8 text-center'>
      <h3>My portfolio</h3>
      <ul>
        <li><Link href="/games/reversi">Reversi</Link></li>
        <li><Link href="/games/flappy">Flapy Bee</Link></li>
        <li><Link href="http://mypinoy.bytecommander.com/" target='_blank'>MyPinoy Network</Link></li>
        <li><Link href="http://panda-appliances.com/" target='_blank'>Panda Appliances</Link></li>
      <li><Link href="https://github.com/adonisv79?tab=repositories" target='_blank'>Open Source Projects</Link></li>
      </ul>
    </div>
    <div id="profiles" className='mt-8 text-center'>
      <h3>Profile Sites</h3>
      <ul>
      <li><Link href="https://github.com/adonisv79" target='_blank'>Github</Link></li>
      <li><Link href="https://www.linkedin.com/in/adonisv79/" target='_blank'>LinkedIn</Link></li>
      <li><Link href="http://bytecommander.com" target='_blank'>Personal Webpage</Link></li>
      </ul>
    </div>
    <div className='mt-8 text-center md:text-end'>
      
    Bytecommander™ (2011) is owned and maintained by Adonis Lee Villamor<br />
        for concerns on this site, please feel free to contact me at <a href="mailto:adonisv79@gmail.com">adonisv79@gmail.com</a>
    </div>
  </footer>
}