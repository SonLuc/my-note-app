import { type Note } from './Note'

export interface Notebook {
  id: number | string
  title: string
  color?: string
  description?: string
  notes?: Note[]
}
