import Link from 'next/link'

export default function MainFooter() {

  return <footer id="footer" className="grid md:grid-cols-2  lg:grid-cols-4 m-16 p-4">
    <div className="mt-8 text-center md:text-start">
      <h3>About Me</h3>
      <p className='mb-4'>Welcome to my site! My name is Don and I have been working my whole life in various roles and fields relative to technology. I have been a SW Developer creating desktop and web apps, a Project Manager working on deliveries and as an Engineering Managemer and lead roles working with people menagement</p>
      <p className='mb-4'>I love technology and thus also had the opportunity to work on multiple programing languages, tools and frameworks which has helped in my adaptability and understanding of various concepts, strategies, SDLC and design patterns</p>
      <p className='mb-1'>Career-wise I am focused only on technology related fields especially if it involves people-management. I am always open to explore and learn from the best who also values the best people.</p>

    </div>
    <div id="portfolio" className='mt-8 text-center'>
      <h3>My portfolio</h3>
      <ul>
        <li><Link href="/games/reversi">Reversi</Link></li>
        <li><Link href="/games/flappy">Flapy Bee</Link></li>
        <li><Link href="http://mypinoy.bytecommander.com/" target='_blank'>MyPinoy Network</Link></li>
        <li><Link href="http://panda-appliances.com/" target='_blank'>Panda Appliances</Link></li>
        <li><Link href="https://github.com/adonisv79?tab=repositories" target='_blank'>Open Source Projects</Link></li>
        <li><Link href="https://github.com/3egames" target='_blank'>3E Games Project Repo</Link></li>
        <li><Link href="https://github.com/MyPinoy-Developers" target='_blank'>MyPinoy Project Repo</Link></li>
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
      <h3>Contact us</h3>
      <p className='mb-4'>Bytecommander™ (2011) is maintained<br /> and owned by Adonis Lee Villamor</p>
      <p className='mb-4'>For any project or work related needs,<br /> feel free to contact me at:<br />
        Email: <a href="mailto:adonisv79@gmail.com">adonisv79@gmail.com</a><br />
        Mobile: <a href="tel:+639171005864">(+63 <img className='inline' src="/images/flags/ph.svg" width={16} height={10} />) 917-1005864</a>
      </p>
    </div>
  </footer>
}