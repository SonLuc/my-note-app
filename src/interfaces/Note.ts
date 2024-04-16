import { type Notebook } from '@/interfaces/Notebook'

export interface Note {
  id: string
  title: string
  content: string
  deleteAt: string
  notebook: Notebook
}

export enum NoteHeaders {
  ID = 'ID',
  TITLE = 'TITULO',
  CONTENT = 'CONTENIDO',
  DELETED_AT = 'DELETED_AT'
}
