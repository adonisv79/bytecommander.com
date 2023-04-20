interface NavigationItem {
  link: string,
  text: string,
  newTab?: boolean,
}

interface NavigationBarProps {
  // disabled?: boolean,
  // onClick?: Function,
  // children?: React.ReactNode;
  config: NavigationItem[]
}

export default function NavigationBar({ config }: NavigationBarProps) {
  const links:any = [];
  config.forEach(e => {
      links.push(
        <a href={e.link} 
          className="m-1.5 text-orange-950 hover:text-orange-700"
          target={e.newTab? "_blank": "_self"}>
          {e.text}
        </a>
      )
  });

  return <nav className="">
    {links}
  </nav>
}