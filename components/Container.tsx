import { ReactNode } from "react";

interface Props{
    children: JSX.Element | JSX.Element[]
    className?: string
}

export function Container({children,className}:Props) {
  return (
    <div className={`${className} px-6`}>{children}</div>
  )
}
