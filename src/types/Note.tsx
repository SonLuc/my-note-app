import { type Homework } from './Homework'

export interface Note {
  id: number
  title: string
  content: string
  homeworks?: Homework[]
}
