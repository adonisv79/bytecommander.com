import { useCallback, useState, ReactElement, Suspense } from "react";
import TabButton from "./TabButton"

export interface TabPanelConfig {
  className?: string
  children?: ReactElement[]
  theme?: {
    borderColor?: string
    fadedTabColor?: string
    fadedTextColor?: string
    mainTabColor?: string
    mainTextColor?: string
    contentHeight?: number
  }
}

const CONFIG_DEFAULTS:TabPanelConfig = {
  className: undefined,
  children: undefined,
  theme: {
    borderColor: '#bbb',
    fadedTabColor: '#444',
    fadedTextColor: '#666',
    mainTabColor: '#888',
    mainTextColor: "#fff",
  }
}

export function TabPanel({ className, children, theme }: TabPanelConfig) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  theme = { ...CONFIG_DEFAULTS.theme, ...theme }

  const onTabSelected = useCallback((index: number, data: any) => () => {
    setCurrentTabIndex(index)
  }, []);

  return <div className={`${className} w-full h-full`}>
    <div className="inline-flex">
      {
        children?.map((c, i) => (
          <TabButton key={`tab${c.props.text}`} tabIndex={i}
            tabColor={ i === currentTabIndex ? theme?.mainTabColor : theme?.fadedTabColor}
            textColor={ i === currentTabIndex ? theme?.mainTextColor : theme?.fadedTextColor}
            currentTabIndex={currentTabIndex} text={c.props.text}
            onClick={onTabSelected(i, c.props)} />)
        )
      }
    </div>
    <div className={`p-2 h-full border tabpanel-content overflow-scroll 
      ${ theme.contentHeight && ` min-h-[${theme.contentHeight}px] max-h-[${theme.contentHeight}px]`}`}
     style={{ backgroundColor: theme.mainTabColor }}>
      <Suspense fallback={<div>Loading...</div>}>
        {children && children[currentTabIndex]}
      </Suspense>
    </div>
  </div>
}
