import { type Notebook } from './Notebook'

export interface UserType {
  id: number
  name: string
  email: string
  password?: string
  picture?: string
  notebooks?: Notebook[]
}
