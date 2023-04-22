interface NavigationItem {
  link: string,
  text: string,
  newTab?: boolean,
}

interface NavigationBarProps {
  config: NavigationItem[]
}

export default function NavigationBar({ config }: NavigationBarProps) {
  const links:any = [];
  config.forEach(e => {
      links.push(
        <a href={e.link} 
          className="m-5 text-4xl text-gray-200 hover:text-yellow-500"
          target={e.newTab? "_blank": "_self"}>
          {e.text}
        </a>
      )
  });

  return <nav className="">
    {links}
  </nav>
}