import { ReactElement } from "react"

interface TabItemProps {
  text: string
  children?: ReactElement | ReactElement[]
}

export default function TabItem(props: TabItemProps) {
  return <>
    {props.children}
  </>
}
