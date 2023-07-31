interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export function Container({ children, className }: Props) {
  return <div className={`${className} Container`}>{children}</div>;
}
