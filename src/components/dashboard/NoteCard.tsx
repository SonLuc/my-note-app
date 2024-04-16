'use client'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Skeleton } from '@nextui-org/skeleton'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

interface NoteCardProps {
  title: string
  date: string
  resumeContent: string
  href?: string
  notebook: {
    title: string
    slug: string
  }
}

export const NoteCard = ({ title, date, href, resumeContent, notebook }: NoteCardProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const path = pathname.split('/notes').join('/notebooks')
  return (
    <Card
      isPressable
      isBlurred
      className="cursor-pointer hover:-translate-y-1"
      onPress={() => { router.push(href ?? '/panel/notes') }}
    >
      <CardHeader className="flex justify-between items-start">
        <div className='flex flex-col items-start'>
          <h3 className="font-bold">{title}</h3>
          <Link href={`${path}/${notebook.slug}`} className='text-sm opacity-50 hover:underline'>
            {notebook.title}
          </Link>
        </div>
        <small className="opacity-50">{date}</small>
      </CardHeader>
      <CardBody>
        <p className='text-sm overflow-hidden max-h-20'>{resumeContent}</p>
      </CardBody>
    </Card>
  )
}

export const NoteCardSkeleton = () => {
  return (
    <Card
      isBlurred
      className="cursor-pointer hover:-translate-y-1"
    >
      <CardHeader className="flex justify-between items-start">
        <div className='flex flex-col items-start gap-2'>
          <Skeleton isLoaded={false} className='w-52 h-5 rounded-lg' />
          <Skeleton isLoaded={false} className='w-20 h-4 rounded-lg' />
        </div>
        <Skeleton isLoaded={false} className='w-10 h-5 rounded-lg' />
      </CardHeader>
      <CardBody>
        <Skeleton isLoaded={false} className='w-full min-h-20 rounded-lg' />
      </CardBody>
    </Card>
  )
}
