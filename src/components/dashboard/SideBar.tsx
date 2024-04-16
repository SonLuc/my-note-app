import SideBarLinks from '@/components/dashboard/SideBar/SideBarLinks'
import SideBarUser from '@/components/dashboard/SideBar/SideBarUser'
import { Divider } from '@nextui-org/divider'

export default function SideBar () {
  return (
    <aside className="col-span-2 px-5 rounded-xl bg-white dark:bg-black border dark:border-neutral-800">
      <SideBarUser />
      <Divider className="my-5" />
      <SideBarLinks />
    </aside>
  )
}
