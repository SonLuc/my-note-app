'use client'
import DashboardLayout from '../dashboard-layout'
import { usePathname } from 'next/navigation'
import Axios from 'axios'
import { useEffect, useState } from 'react'
import { Divider } from '@nextui-org/divider'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/table'
import { type Notebook, NotebookHeaders } from '@/interfaces/Notebook'
import { BookIcon } from '@/components/Icons'
import { Link } from '@nextui-org/react'

const fetchNotebooks = async () => {
  try {
    const res = await Axios.get('http://localhost:3001/api/v1/notebooks', {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2lhbm8uZGVuaXMuYUBnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsImlhdCI6MTcxMzI0MDg1MCwiZXhwIjoxNzEzMzI3MjUwfQ.-MOm3hAbmOpYV53KJr888Fk3wGvoZk-dhiyKtj9wD2Q'
      }
    })
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Error fetching notebooks')
  }
}

export default function NotebookPage () {
  const pathname = usePathname()
  const [notebooks, setNotebooks] = useState<Notebook[]>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchNotebooks()
        setNotebooks(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <DashboardLayout>
      <span className="flex items-center gap-3">
        <BookIcon className="w-7 h-7 bg-primary-500 rounded-lg p-1 border border-primary-600" />
        <h1 className="font-bold">Mis Notas</h1>
      </span>
      <Divider className='my-6'/>
        <Table aria-label='Libretas'>
          <TableHeader>
            <TableColumn>{NotebookHeaders.TITLE}</TableColumn>
            <TableColumn>{NotebookHeaders.DESCRIPTION}</TableColumn>
            <TableColumn>{NotebookHeaders.COLOR}</TableColumn>
          </TableHeader>
          <TableBody>
            {notebooks.map(notebook => (
              <TableRow key={notebook.id}>
                <TableCell>
                  <Link className='text-sm' href={`${pathname}/${notebook.slug}`}>
                    {notebook.title}
                  </Link>
                </TableCell>
                <TableCell>{notebook.description ?? 'No existe descripción'}</TableCell>
                <TableCell>
                  <span className='rounded-md w-5 h-5 inline-block' style={{ backgroundColor: notebook.color }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </DashboardLayout>
  )
}
