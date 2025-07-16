'use client';

import { usePathname } from 'next/navigation';

import LinkAnchor from './LinkAnchor';

export default function NavigationAnchor({
  children,
  className,
  link,
}: {
  children: React.ReactNode,
  className?: string,
  link?: string,
}) {
  const sameRoot = usePathname().startsWith(link || '/');

  return (
    <LinkAnchor 
      link={link}
      active={sameRoot}
      className={`${className}`}
    >
      { children }
    </LinkAnchor>
  )
}