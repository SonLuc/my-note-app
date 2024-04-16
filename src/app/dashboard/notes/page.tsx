'use client'
import { DocumentIcon } from '@/components/Icons'
import { NoteCard, NoteCardSkeleton } from '@/components/dashboard/NoteCard'
import { Divider } from '@nextui-org/divider'
import { useEffect, useState } from 'react'
import { type Note } from '@/interfaces/Note'
import { fetchNotes } from '@/api/fetchNotes'
import DashboardLayout from '../dashboard-layout'

export default function NotePage () {
  const [loading, setLoading] = useState(false)
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchNotes()
        setNotes(data)
        setLoading(true)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <DashboardLayout>
      <section>
        <span className="flex items-center gap-3">
          <DocumentIcon className="w-7 h-7 bg-primary-500 rounded-lg p-1 border border-primary-600" />
          <h1 className="font-bold">Mis Notas</h1>
        </span>
        <Divider className="my-6" />
        <main className="grid grid-cols-4 gap-3">
          {!loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <NoteCardSkeleton key={i} />
            ))
            : notes.map(({ id, title, content, notebook }: Note) => (
                <NoteCard
                  key={id}
                  date="Hoy"
                  title={title}
                  resumeContent={content}
                  href="#"
                  notebook={{
                    title: notebook.title,
                    slug: notebook.slug
                  }}
                />
            ))}
        </main>
      </section>
    </DashboardLayout>
  )
}
