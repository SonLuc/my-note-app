export interface Notebook {
  id: string
  title: string
  slug: string
  description?: string
  color: string
  deletedAt: string
  userEmail: string
}

export enum NotebookHeaders {
  ID = 'ID',
  TITLE = 'TITULO',
  SLUG = 'SLUG',
  DESCRIPTION = 'DESCRIPCIÓN',
  COLOR = 'COLOR',
  DELETED_AT = 'DELETED_AT',
  USER_EMAIL = 'USER_EMAIL'
}
