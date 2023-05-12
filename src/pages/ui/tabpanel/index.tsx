import { lazy } from 'react'
import TabPanel from '../../../components/ui/TabPanel'
import TabItem from '../../../components/ui/TabPanel/TabItem'
const PanelComponent1 = lazy(() => {
  console.log('TabPanel1 test component was lazy loaded!')
  return import('./PanelComponent1')
})
const PanelComponent2 = lazy(() => {
  console.log('TabPanel2 test component was lazy loaded!')
  return import('./PanelComponent2')
})

export default function CustomComponentPage() {
  return <div className="p-4">
    <h2>Custom Component: TabPanel</h2>
    <p className='my-4'>This is a tabPanel. An organizer component that allows us to vie multiple groups of components from a single view</p>
    <p className='my-4'>This panel allows for lazy loading in order to make inital loading faster</p>
    <TabPanel theme={{
      borderColor: "#aaa",
      fadedTabColor: "#116",
      mainTabColor: '#338',
      contentHeight: 200
    }}>
      <TabItem text="Page Tab 1">
        <PanelComponent1 />
      </TabItem>
      <TabItem text="Page Tab 2">
        <PanelComponent2 />
      </TabItem>
      <TabItem text="Guide">
        <h1>How is this used?</h1>
        <p>Go to the my bytecommander.com repo to see the sample code</p>
      </TabItem>
      <TabItem text="PageTab 4">
        <h1>This is Page 4</h1>
        <button onClick={() => alert('you clicked me!')}>Click me</button>
      </TabItem>
      <TabItem text="PageTab 5">
        <h1>This is Page 5</h1>
        <button onClick={() => alert('good job!')}>Click me</button>
      </TabItem>
    </TabPanel>
  </div>
}