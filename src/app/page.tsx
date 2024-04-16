import Navbar, { type LinkProps } from '@/components/navbar/Navbar'

export default function Home () {

  const links: LinkProps['links'] = [
    { name: 'Inicio', href: '/', button: false },
    { name: 'Mis Notas', href: '/dashboard', button: false },
    { name: 'Iniciar sesión', href: '/login', button: true, variant: 'solid' },
    { name: 'Registrarse', href: '/register', button: true, variant: 'bordered' }
  ]

  return (
    <>
      <Navbar links={links} />
      <main className="mx-[10%] py-24">
        <h1 className="text-7xl font-bold text-center">Bienvenido a MyNote!</h1>
        <p className="text-center py-16 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem commodi quo voluptatibus quidem, maxime consequatur recusandae harum nam vel earum quibusdam reiciendis voluptates illum cum fugiat dicta, alias itaque veniam.
        </p>

        <section className="grid grid-cols-12">
          <div className="col-span-6">
            <h2 className="text-4xl font-bold">¿Qué es MyNote?</h2>
            <p className="text-lg py-5">
              MyNote es una aplicación web que te permite tomar notas de manera sencilla y rápida. Puedes crear cuadernos, agregar notas a estos cuadernos y organizar tus notas de la manera que prefieras.
            </p>
          </div>
          <div className="col-span-6">
            <h2 className="text-4xl font-bold">¿Cómo funciona?</h2>
            <p className="text-lg py-5">
              Para empezar a usar MyNote, solo necesitas crear una cuenta y listo! Ya puedes empezar a crear cuadernos y notas. Puedes acceder a tus notas desde cualquier dispositivo, solo necesitas una conexión a internet.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
