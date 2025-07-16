type Base = {
  children: React.ReactNode,
  className?: string,
  wrapperClass?: string,
}

type LinkType = {
  link: string,
  clickHandler?: never,
}

type FunctionType = {
  clickHandler: () => void,
  link?: never
}

export type ButtonType = Base & (LinkType | FunctionType);