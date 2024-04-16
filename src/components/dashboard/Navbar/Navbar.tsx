import ThemeSwitcher from './ThemeSwitcher'
import { Divider } from '@nextui-org/react'

export default function Navbar () {
  return (
    <header className="row-span-1 px-5 flex items-center">
      <nav className="w-full flex items-center py-3 px-5 justify-between rounded-2xl shadow-sm bg-white dark:bg-neutral-900">
        <div className="flex items-center">
          <span className="font-bold">MyNote!</span>
          <Divider orientation="vertical" className="mx-3" />
        </div>
        <ThemeSwitcher />
      </nav>
    </header>
  )
}
