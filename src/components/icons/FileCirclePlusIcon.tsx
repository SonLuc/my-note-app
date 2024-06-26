import type { IconSvg } from '@/types/IconSvg'

export default function FileCirclesPlusIcon ({ className }: IconSvg) {
  return (
    <svg className={className} stroke='currentColor' fill='none' strokeWidth={1.5} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 9V4a1 1 0 0 0-1-1H8.914a1 1 0 0 0-.707.293L4.293 7.207A1 1 0 0 0 4 7.914V20a1 1 0 0 0 1 1h4M9 3v4a1 1 0 0 1-1 1H4m11 6v4m-2-2h4m3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>
    </svg>
  )
}
