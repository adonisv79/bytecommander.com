import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <div>
    <Head>
      <meta property="og:url" content="https://bytecommander.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="The ByteCommander" />
      <meta name="description" content="Profile and portfolio website of Adonis Lee Villamor" />
      <meta property="og:image" content="https://bytecommander.com/images/don.webp" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="bytecommander.com" />
      <meta property="twitter:url" content="https://bytecommander.com" />
      <meta name="twitter:title" content="The ByteCommander" />
      <meta name="twitter:description" content="Profile and portfolio website of Adonis Lee Villamor" />
      <meta name="twitter:image" content="https://bytecommander.com/images/don.webp" />
    </Head>
    <div className='text-center m-4'>
      <h2 className='grid sm:grid-cols-2 md:grid-cols-4 justify-center'>
        <div>SW Developer</div><div>Team Lead</div><div>Manager</div><div>Trader</div>
      </h2>
    </div>
    <div className='bg-indigo-800'>
      <div className='flex overflow-hidden'>
        <img className=' h-fit' src="images/don.webp" />
      </div>
    </div>
    <div className='text-center m-4'>
      <h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 inline-block mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>

        Global work experiences
      </h1>
    </div>
    <div className='bg-slate-300'>
      <div className='flex flex-wrap justify-center p-4'>
        <Image className='object-contain m-5' src="images/companies/samsung.png" alt="Samsung R&D" width={150} height={1} />
        <Image className='object-contain m-5' src="images/companies/accenture.png" alt="Accenture Philippines" width={150} height={1} />
        <Image className='object-contain m-5' src="images/companies/avanade.webp" alt="Avanade PH" width={150} height={1} />
        <Image className='object-contain m-5' src="images/companies/navitaire.png" alt="Navitaire" width={150} height={1} />
        <Image className='object-contain m-5' src="images/companies/Fujitsu.png" alt="Fujitsu PH" width={150} height={1} />
        <Image className='object-contain m-5' src="images/companies/WeServ.png" alt="WeServe" width={150} height={1} />
        <Image className='object-contain m-5' src="images/companies/LenddoEFL.png" alt="LenddoEFL" width={150} height={1} />
        <Image className='object-contain m-5' src="images/companies/infinito.webp" alt="Infinit-o" width={150} height={1} />
        <Image className='object-contain m-5' src="images/companies/prosource.webp" alt="Prosource" width={150} height={1} />
        <Image className='object-contain m-5' src="images/companies/siteminder.png" alt="SiteMinder" width={150} height={1} />
        <Image className='object-contain m-5' src="images/companies/prudentialife.png" alt="Pridentialife" width={150} height={1} />
        <Image className='object-contain m-5' src="images/companies/mediasoft.jpg" alt="Mediasoft" width={150} height={1} />
        <Image className='object-contain m-5' src="images/companies/equicom.png" alt="Equicom" width={150} height={1} />
      </div>
    </div>

    <div className='text-center m-4'>
      <h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 inline-block mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
        Awards and Certifications
      </h1>
    </div>

    <div className='text-center bg-emerald-300'>
      <div className='flex flex-wrap justify-center p-4'>
        <Image className='object-contain m-5' src="images/certificates/mcp.png" alt="Microsoft Certified Pro" width={150} height={1} />
        <Image className='object-contain m-5' src="images/certificates/pmp.png" alt="Project Management Pro" width={150} height={1} />
      </div>
    </div>

    <div className='text-center m-4'>
      <h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 inline-block mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
        Favorite Technologies
      </h1>
    </div>

    <div className='text-center bg-stone-100'>

      <div className='flex flex-wrap justify-center p-4'>

        <Image className='object-contain m-5' src="images/techlogos/github.png" alt="Github" width={150} height={1} />
        <Image className='object-contain m-5' src="images/techlogos/visualstudio.png" alt="Visual Studio" width={150} height={1} />
        <Image className='object-contain m-5' src="images/techlogos/typescript.png" alt="Typescript" width={150} height={1} />
        <Image className='object-contain m-5' src="images/techlogos/front-end-stack.png" alt="WEB" width={200} height={1} />
        <Image className='object-contain m-5' src="images/techlogos/react.png" alt="ReactJS" width={150} height={1} />
        <Image className='object-contain m-5' src="images/techlogos/tailwind.jpg" alt="Tailwind" width={150} height={1} />
        <Image className='object-contain m-5' src="images/techlogos/nodejs.png" alt="NodeJS" width={150} height={1} />
        <Image className='object-contain m-5' src="images/techlogos/express.webp" alt="Express" width={150} height={1} />
        <Image className='object-contain m-5' src="images/techlogos/next.png" alt="NextJS" width={150} height={1} />
        <Image className='object-contain m-5' src="images/techlogos/eslint.webp" alt="ESLint" width={150} height={1} />
        <Image className='object-contain m-5' src="images/techlogos/jest.png" alt="Jest" width={150} height={1} />
        <Image className='object-contain m-5' src="images/techlogos/MongoDB.png" alt="MongoDB" width={150} height={1} />
        <Image className='object-contain m-5' src="images/techlogos/mysql.png" alt="MySQL" width={150} height={1} />
        <Image className='object-contain m-5' src="images/techlogos/redis.png" alt="Redis" width={150} height={1} />
        <Image className='object-contain m-5' src="images/techlogos/docker.webp" alt="Docker" width={150} height={1} />
        <Image className='object-contain m-5' src="images/techlogos/csharp.png" alt="C#" width={150} height={1} />
        <Image className='object-contain m-5' src="images/techlogos/jira.png" alt="Jira" width={150} height={1} />
        <Image className='object-contain m-5' src="images/techlogos/gworkspace.jpg" alt="Google Workspace" width={150} height={1} />
        <Image className='object-contain m-5' src="images/techlogos/github_actions.png" alt="Github Actions" width={150} height={1} />
        <Image className='object-contain m-5' src="images/techlogos/circleci.png" alt="CircleCI" width={150} height={1} />
        <Image className='object-contain m-5' src="images/techlogos/postman.png" alt="PostMan" width={150} height={1} />
        <Image className='object-contain m-5' src="images/techlogos/gimp.png" alt="Gimp" width={150} height={1} />
      </div>
    </div>
  </div>
}
