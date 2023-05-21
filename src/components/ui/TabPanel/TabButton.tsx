export interface TabButtonConfig {
  tabColor?: string
  textColor?: string
  tabIndex: number
  currentTabIndex: number
  text: string
  onClick: () => void
}

export default function TabButton({ tabIndex, tabColor, textColor, currentTabIndex, text, onClick }: TabButtonConfig) {
  return <button tabIndex={tabIndex} onClick={onClick}
    style={{ backgroundColor: tabColor, color: textColor }}
    className={`border border-b-0 px-2 mr-1 rounded-t-md
   ${currentTabIndex === tabIndex && 'bg-white text-gray-800'}`}>
    {text}
  </button>
}
