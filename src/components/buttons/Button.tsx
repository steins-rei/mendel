import Link from "next/link";

export function LinkButton({ 
  children,
  className,
  link,
}: {
  children?: React.ReactNode,
  className?: string,
  link: string,
}) {
  return (
    <Link href={link || '/'}
      className={className}
    >
      { children }
    </Link>
  )
}

export function FunctionButton({
  children,
  className,
  clickHandler
}: {
  children?: React.ReactNode,
  className?: string,
  clickHandler: () => void
}) {
  return (
    <button onClick={clickHandler}
      className={className}
    >
      { children }
    </button>
  )
}