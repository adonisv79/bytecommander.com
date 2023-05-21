import { FormEvent, forwardRef } from "react";

export interface WebFormProps {
  id: string
  children?: any
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
}

const WebForm = forwardRef<HTMLFormElement, WebFormProps>(({
  id,
  children,
  onSubmit
}, ref) => {
  return <form id={id} ref={ref} onSubmit={onSubmit}>
    {children}
  </form>
});

WebForm.displayName = 'WebForm'

export default WebForm;
