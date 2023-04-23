import Link from 'next/link'

export default function MainFooter() {

  return <footer id="footer" className="grid md:grid-cols-2  lg:grid-cols-4 m-16 p-4">
    <div className="mt-8 text-center md:text-start">
      <h3>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 inline-block mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
        About Me
      </h3>
      <p className='mb-4'>Welcome to my site! My name is Don and I have been working my whole life in various roles and fields relative to technology. I have been a SW Developer creating desktop and web apps, a Project Manager working on deliveries and as an Engineering Managemer and lead roles working with people menagement</p>
      <p className='mb-4'>I love technology and thus also had the opportunity to work on multiple programing languages, tools and frameworks which has helped in my adaptability and understanding of various concepts, strategies, SDLC and design patterns</p>
      <p className='mb-1'>Career-wise I am focused only on technology related fields especially if it involves people-management. I am always open to explore and learn from the best who also values the best people.</p>

    </div>
    <div id="portfolio" className='mt-8 text-center'>
      <h3>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 inline-block mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
        My portfolio
      </h3>
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
      <h3>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 inline-block mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>

        Profile Sites
      </h3>
      <ul>
        <li><Link href="https://github.com/adonisv79" target='_blank'>Github</Link></li>
        <li><Link href="https://www.linkedin.com/in/adonisv79/" target='_blank'>LinkedIn</Link></li>
        <li><Link href="http://bytecommander.com" target='_blank'>Personal Webpage</Link></li>
      </ul>
    </div>
    <div className='mt-8 text-center md:text-end'>
      <h3>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 inline-block mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
        Contact us
      </h3>
      <p className='mb-4'>Bytecommander™ (2011) is maintained<br /> and owned by Adonis Lee Villamor</p>
      <p className='mb-4'>For any project or work related needs,<br /> feel free to contact me at:<br />
        Email: <a href="mailto:adonisv79@gmail.com">adonisv79@gmail.com</a><br />
        Mobile: <a href="tel:+639171005864">(+63 <img className='inline' src="/images/flags/ph.svg" width={16} height={10} />) 917-1005864</a>
      </p>
    </div>
  </footer>
}