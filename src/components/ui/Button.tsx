interface ButtonProps {
  disabled?: boolean,
  onClick?: Function,
  children?: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  return <button
    disabled={props.disabled}
    onClick={()=>{
      if (props.onClick) props.onClick();
    }}
    className="
        m-1 p-1 rounded-full 
        bg-gray-500 disabled:opacity-50"
  >
    <span
      className="
        block px-2 py-1 rounded-full
        font-semibold
        text-xs
        text-primary-f-1
        bg-primary-b-1
        hover:bg-primary-b-3
        hover:text-primary-f-3"
    >
      {props.children}
    </span>
  </button>
}