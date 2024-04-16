import type { IconSvg } from '@/types/IconSvg'

export default function ElipsisIcon ({ className }: IconSvg) {
  return (
    <svg className={className} stroke='currentColor' strokeWidth={1.5} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
    </svg>
  )
}
