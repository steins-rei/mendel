'use client';

import Link from "next/link";

export default function LinkAnchor({
  children,
  className,
  active,
  link,
}: {
  children?: React.ReactNode,
  className?: string,
  active?: boolean,
  link?: string
}) {
  return (
    <Link
      href={link || '/'}
    >
      <div
        style={{
          opacity: active ? '1' : '',
        }}
        className={`${className} --reactive`}
      >
        { children }
      </div>
    </Link>
  )
}