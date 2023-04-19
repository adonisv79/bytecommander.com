import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <div>
    <p>Note that I am rebuilding this site and have scrapped the old one. In the meantime, please try my games created purely using ReactJS and related technologies. Or watch this awesome music video of my favorite anime ever "Hokuto No Ken" (Fist of the north Star). Thanks</p>
    <iframe width="360" height="225" src="https://www.youtube.com/embed/VSs71eE-jmo" frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
  </div>
}
