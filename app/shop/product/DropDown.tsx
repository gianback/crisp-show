interface DropDawnProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

export function DropDown({ children, title }: DropDawnProps) {
  return (
    <article>
      <div>{title}</div>
      {children}
    </article>
  );
}
