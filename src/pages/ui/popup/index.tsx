import { Suspense, lazy, useState } from "react";

const ModalDialog = lazy(() => {
  console.log('lazy loading modal component');
  return import("@/components/ui/ModalDialog")
});

export default function ModalPage() {
  const [dialogVisible, setDialogVisible] = useState(false)

  
  const SlowComponent = lazy(() => import("./SlowLoadingComponent"));

  return <div className="flex justify-center">
    <button className="border p-2 m-3 bg-gray-600" onClick={() => setDialogVisible(true)}>Click here to show sample popup</button>
    <ModalDialog visible={dialogVisible} onDialogClose={() => {
      setDialogVisible(false)
    }}>
      <div className="flex justify-center p-4  h-[100%]">
        <Suspense fallback={<div>sadsad</div>}>

        <SlowComponent />
        </Suspense>
      </div>
    </ModalDialog>
  </div>
}
