import { cn } from '@nextui-org/react'
import { type ChangeEvent, useEffect, useState } from 'react'


interface ColorPickerProps {
  value?: string
}

export default function ColorPicker ({ value = '#000000' }: ColorPickerProps) {

  const pickerID = `color-picker_${Date.now()}`
  const [color, setColor] = useState(value)

  const classes = {
    base: cn('flex flex-col bg-red-500 p-5 rounded-xl'),
    color: cn('w-10 h-10 absolute rounded-full'),
    backdrop: cn('w-12 blur-md opacity-0 h-12 rounded-full')
  }

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value)
  }

  useEffect(() => { setColor(value) }, [value])

  return (
    <>
      <input onChange={handleColorChange} type="color" id={pickerID} name='color' className='h-0 w-0 opacity-0' />
      <section className={'relative'}>
        <label htmlFor={pickerID}>
          <div style={{ backgroundColor: color }} className={classes.color}></div>
          <div style={{ backgroundColor: color }} className={classes.backdrop}></div>
        </label>
      </section>
    </>
  )
}
