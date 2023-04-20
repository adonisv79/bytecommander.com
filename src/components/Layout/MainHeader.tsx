import NavBar from '../ui/NavigationBar'
export default function MainHeader() {
  const navbarConfig:any = [];
  navbarConfig.push({ link: '/', text: 'Home' })
  navbarConfig.push({ link: '/games/reversi', text: 'Reversi' })
  navbarConfig.push({ link: '/games/flappy', text: 'Flappy Bee' })
  navbarConfig.push({ link: 'http://mypinoy.bytecommander.com', text: 'MyPinoy Stock market Scraper', newTab: true })
  navbarConfig.push({ link: 'http://panda-appliances.com', text: 'Panda Appliances', newTab: true })
  navbarConfig.push({ link: 'https://github.com/adonisv79', text: 'My Projects', newTab: true })
  navbarConfig.push({ link: 'https://www.linkedin.com/in/adonisv79/', text: 'My Professional Profile', newTab: true })
  

  return <header className="p-2 rounded-md bg-gradient-to-r from-cyan-400 via-fuchsia-300 to-indigo-500">
    <div className="flex flex-wrap">
      <div className="w-12/12 sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12">
        <img alt="ds" src="/images/logo.png" width="300" />
        
      </div>
      <div className=' w-12/12 sm:w-6/12 md:w-8/12 lg:w-9/12'>
        <NavBar config={navbarConfig} />
      </div>
      <div className="w-1/12 hidden justify-end xl:inline">
        <img alt="s" src="/images/header-filler.png" width="150" />
      </div>
    </div>
  </header>
}