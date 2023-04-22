import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <div>
    <div className='text-center m-4'>
      <h2 className='flex flex-wrap justify-center'><div>SW Developer - </div><div>Team Lead - </div><div>Manager - </div><div>Trader</div></h2>
    </div>
    <div className='bg-indigo-800'>
      <div className='flex overflow-hidden'>
        <img className=' h-fit' src="images/don.webp" />
      </div>
    </div>
    <div className='text-center m-4'>
      <h1>Great work experiences</h1>
    </div>
    <div className='bg-slate-300'>
      <div className='flex flex-wrap justify-center p-4'>
        <img className='object-contain m-5' src="images/companies/samsung.png" alt="Samsung R&D" width={150} height={1} />
        <img className='object-contain m-5' src="images/companies/accenture.png" alt="Accenture Philippines" width={150} height={1} />
        <img className='object-contain m-5' src="images/companies/avanade.webp" alt="Avanade PH" width={150} height={1} />
        <img className='object-contain m-5' src="images/companies/navitaire.png" alt="Navitaire" width={150} height={1} />
        <img className='object-contain m-5' src="images/companies/Fujitsu.png" alt="Fujitsu PH" width={150} height={1} />
        <img className='object-contain m-5' src="images/companies/WeServ.png" alt="WeServe" width={150} height={1} />
        <img className='object-contain m-5' src="images/companies/LenddoEFL.png" alt="LenddoEFL" width={150} height={1} />
        <img className='object-contain m-5' src="images/companies/infinito.webp" alt="Infinit-o" width={150} height={1} />
        <img className='object-contain m-5' src="images/companies/prosource.webp" alt="Prosource" width={150} height={1} />
        <img className='object-contain m-5' src="images/companies/siteminder.png" alt="SiteMinder" width={150} height={1} />
        <img className='object-contain m-5' src="images/companies/prudentialife.png" alt="Pridentialife" width={150} height={1} />
        <img className='object-contain m-5' src="images/companies/mediasoft.jpg" alt="Mediasoft" width={150} height={1} />
        <img className='object-contain m-5' src="images/companies/equicom.png" alt="Equicom" width={150} height={1} />
      </div>
    </div>

    <div className='text-center m-4'>
      <h1>Awards and Certifications</h1>
    </div>

    <div className='text-center bg-emerald-300'>
      <div className='flex flex-wrap justify-center p-4'>
        <img className='object-contain m-5' src="images/certificates/mcp.png" alt="Microsoft Certified Pro" width={150} height={1} />
        <img className='object-contain m-5' src="images/certificates/pmp.png" alt="Project Management Pro" width={150} height={1} />
      </div>
    </div>

    <div className='text-center m-4'>
      <h1>Favorite Technologies</h1>
    </div>

    <div className='text-center bg-stone-100'>

      <div className='flex flex-wrap justify-center p-4'>

        <img className='object-contain m-5' src="images/techlogos/github.png" alt="Github" width={150} height={1} />
        <img className='object-contain m-5' src="images/techlogos/visualstudio.png" alt="Visual Studio" width={150} height={1} />
        <img className='object-contain m-5' src="images/techlogos/typescript.png" alt="Typescript" width={150} height={1} />
        <img className='object-contain m-5' src="images/techlogos/front-end-stack.png" alt="WEB" width={200} height={1} />
        <img className='object-contain m-5' src="images/techlogos/react.png" alt="ReactJS" width={150} height={1} />
        <img className='object-contain m-5' src="images/techlogos/tailwind.jpg" alt="Tailwind" width={150} height={1} />
        <img className='object-contain m-5' src="images/techlogos/nodejs.png" alt="NodeJS" width={150} height={1} />
        <img className='object-contain m-5' src="images/techlogos/express.webp" alt="Express" width={150} height={1} />
        <img className='object-contain m-5' src="images/techlogos/next.png" alt="NextJS" width={150} height={1} />
        <img className='object-contain m-5' src="images/techlogos/eslint.webp" alt="ESLint" width={150} height={1} />
        <img className='object-contain m-5' src="images/techlogos/jest.png" alt="Jest" width={150} height={1} />
        <img className='object-contain m-5' src="images/techlogos/MongoDB.png" alt="MongoDB" width={150} height={1} />
        <img className='object-contain m-5' src="images/techlogos/mysql.png" alt="MySQL" width={150} height={1} />
        <img className='object-contain m-5' src="images/techlogos/redis.png" alt="Redis" width={150} height={1} />
        <img className='object-contain m-5' src="images/techlogos/docker.webp" alt="Docker" width={150} height={1} />
        <img className='object-contain m-5' src="images/techlogos/csharp.png" alt="C#" width={150} height={1} />
        <img className='object-contain m-5' src="images/techlogos/jira.png" alt="Jira" width={150} height={1} />
        <img className='object-contain m-5' src="images/techlogos/gworkspace.jpg" alt="Google Workspace" width={150} height={1} />
        <img className='object-contain m-5' src="images/techlogos/circleci.png" alt="CircleCI" width={150} height={1} />
        <img className='object-contain m-5' src="images/techlogos/postman.png" alt="PostMan" width={150} height={1} />
        <img className='object-contain m-5' src="images/techlogos/gimp.png" alt="Gimp" width={150} height={1} />
      </div>
    </div>
  </div>
}
