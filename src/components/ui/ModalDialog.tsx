import { PropsWithChildren } from "react"

export interface ModalDialogProps extends PropsWithChildren {
  visible: boolean,
  onDialogClose: () => void
}

export default function ModalDialog({ visible, onDialogClose, children }: ModalDialogProps) {
  if (!visible) return <></>

  return <div id="modalBG" className={`fixed z-10 left-0 top-0 w-full h-full
      bg-black bg-opacity-80 overflow-auto`}>
    <div className="flex justify-center">
      <button onClick={() => { onDialogClose() }}>
        <span className="flex select-none mt-2 text-yellow-400">CLOSE
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
      </button>
    </div>
    <div>
      {children}
    </div>
  </div>
}
