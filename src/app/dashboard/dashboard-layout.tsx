import SideBar from '@/components/dashboard/SideBar'
import Navbar from '@/components/dashboard/Navbar/Navbar'

export default function DashboardLayout ({ children }: { children: React.ReactNode, breadcrumb?: object[] }) {
  return (
    <main className="grid grid-cols-12 h-screen">
      <SideBar />
      <section className="col-span-10 grid grid-rows-12">
        <Navbar />
        <section className="row-span-11 p-5">
          { children }
        </section>
      </section>
    </main>
  )
}
