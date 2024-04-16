import {
  BookIcon,
  CheckCircleIcon,
  DocumentIcon,
  FileCirclesPlusIcon,
  HomeIcon,
  ToothIcon
} from '@/components/Icons'
import ListLinkLayout, { type ListBoxProps } from '@/layouts/ListLinkLayout'
import { Divider } from '@nextui-org/divider'

export default function SideBarLinks () {
  const mainItems: ListBoxProps['items'] = [
    {
      value: 'Inicio',
      key: 'inicio',
      href: '/dashboard',
      startContent: <HomeIcon className="w-5 h-5" />
    },
    {
      value: 'Libretas',
      key: 'libretas',
      href: '/dashboard/notebooks',
      startContent: <BookIcon className="w-5 h-5" />
    },
    {
      value: 'Notas',
      key: 'notas',
      href: '/dashboard/notes',
      startContent: <DocumentIcon className="w-5 h-5" />,
      endContent: <FileCirclesPlusIcon className="w-5 h-5 opacity-50" />
    },
    {
      value: 'Tareas',
      key: 'tareas',
      href: '/dashboard/tareas',
      startContent: <CheckCircleIcon className="w-5 h-5" />
    }
  ]

  const configItems: ListBoxProps['items'] = [
    {
      value: 'Configuración',
      key: 'configuracion',
      href: '#',
      startContent: <ToothIcon className="w-5 h-5" />
    }
  ]

  return (
    <section>
      <ListLinkLayout ariaLabel='Navigations' items={mainItems} />
      <Divider className="my-4" />
      <ListLinkLayout ariaLabel='Configurations' items={configItems} />
    </section>
  )
}
