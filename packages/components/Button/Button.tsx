export interface ButtonProps{
}

export function Button(props: React.PropsWithChildren<ButtonProps>) {
  const { children } = props;

  return <button type="button">{children}</button>;
}
