'use client'
import { Listbox, ListboxItem } from '@nextui-org/listbox'
import { useRouter } from 'next/navigation'

export interface ListBoxProps {
  ariaLabel: string
  items: Array<{
    value: string
    key: string
    href: string
    startContent: React.ReactNode
    endContent?: React.ReactNode
  }>
}

export default function ListLinkLayout ({ ariaLabel, items }: ListBoxProps) {
  const router = useRouter()
  return (
    <Listbox aria-label={ariaLabel}>
      {items.map(({ key, value, href, startContent, endContent = <></> }) => (
        <ListboxItem key={key} startContent={startContent} onClick={() => { router.push(href) }}>
          {value}
        </ListboxItem>
      ))}
    </Listbox>
  )
}
