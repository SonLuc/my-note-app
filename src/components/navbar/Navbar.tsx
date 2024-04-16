'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/button'

export interface LinkProps {
  links: Array<{
    name: string
    href: string
    button: boolean
    variant?: 'solid' | 'bordered' | undefined
  }>
}

export default function Navbar ({ links }: LinkProps) {
  const router = useRouter()

  return (
    <header>
      <nav className="flex items-center justify-between py-8 mx-[10%]">
        <span className="text-2xl font-extrabold flex items-center gap-2">
          MyNote!
          <div className="bg-blue-500 w-5 h-5 rounded-full"></div>
        </span>
        <ul className="flex items-center gap-3">
          {links.map(({ name, href, button, variant }, i) => (
            <li key={i}>
              { button
                ? <Button onClick={() => { router.push(href) }} color='primary' variant={variant}>{name}</Button>
                : <Link href={href}>{name}</Link>}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
