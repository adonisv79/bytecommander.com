import Link from 'next/link'
import Button from '../ui/Button'
export default function MainHeader() {
  return <header className="p-2 rounded-md bg-gradient-to-r from-cyan-400 via-fuchsia-300 to-indigo-500">
    <div className="grid grid-cols-3">
      <div>
        <img alt="ds" src="/images/logo.png" width="300" />
      </div>
      <div>
        <div className="flex flex-wrap">
          <Link href="/"><Button>Home</Button></Link>
          <Link href="/games/reversi"><Button>Reversi</Button></Link>
          <Link href="/games/flappy"><Button>Flappy Bee</Button></Link>
          <Link href="http://mypinoy.bytecommander.com" target="_blank"><Button>MyPinoy Stock market Scraper</Button></Link>
          <Link href="http://panda-appliances.com" target="_blank"><Button>Panda Appliances</Button></Link>
          <Link href="https://github.com/adonisv79" target="_blank"><Button>Public Projects</Button></Link>
          <Link href="https://www.linkedin.com/in/adonisv79/" target="_blank"><Button>My Professional Profile</Button></Link>
        </div>
      </div>
      <div>
        <div className="grid text-end justify-end">
          <img alt="s" src="/images/header-filler.png" width="150" />
        </div>
      </div>
    </div>
  </header>
}