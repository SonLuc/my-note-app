'use client'
import { Switch } from '@nextui-org/switch'
import { SunIcon, MoonIcon } from '@/components/icons/DarkModeIcons'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitcher () {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  
  return (
    <Switch
      defaultSelected
      onChange={() => { setTheme(theme === 'dark' ? 'light' : 'dark') }}
      isSelected={theme === 'light'}
      size="md"
      color="primary"
      thumbIcon={({ isSelected, className }) => (
        isSelected 
          ? <SunIcon className={className} />
          : <MoonIcon className={className} />
      )}
    />
  )
}
