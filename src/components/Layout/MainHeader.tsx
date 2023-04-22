import NavBar from '../ui/NavigationBar'
export default function MainHeader() {
  const navbarConfig:any = [];
  navbarConfig.push({ link: '/', text: 'Home' })
  navbarConfig.push({ link: '#portfolio', text: 'Portfolio' })
  

  return <header className="p-2 rounded-md bg-gradient-to-r from-indigo-800 to-indigo-950">
    <div className="flex flex-wrap align-middle justify-center">
      <div className="grid p-4 xs:w-12/12 sm:w-7/12 md:w-6/12 lg:w-5/12">
        <img alt="ds" src="/images/logo.png" width="400" />
      </div>
      <div className='p-4 sm:text-end sm:w-5/12 md:w-6/12 lg:w-7/12'>
        <NavBar config={navbarConfig} />
      </div>
    </div>
  </header>
}