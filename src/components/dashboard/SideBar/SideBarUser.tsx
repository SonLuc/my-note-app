'use client'
import { type UserType } from '@/types/UserType'
import BookIcon from '@/components/icons/BookIcon'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@nextui-org/modal'
import { Input, Textarea } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Avatar } from '@nextui-org/avatar'
import ColorPicker from '@/components/forms/ColorPicker'

export default function SideBarUser () {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const user: UserType = {
    id: 1,
    name: 'Luciano Denis',
    email: 'luciano.denis.a@gmail.com'
  }

  return (
    <section className="flex flex-col">
      <div className="flex items-center gap-4 mt-7">
        <Avatar src={user.picture} name={user.name} alt={user.name} />
        <div className="flex flex-col">
          <span className="text-sm">{user.name}</span>
          <span className="text-xs text-gray-500">{user.email}</span>
        </div>
      </div>
      <div className="mt-5 flex gap-2">
        <Button
          color="primary"
          onPress={onOpen}
          fullWidth
          startContent={
            <BookIcon className="fill-transparent stroke-white w-5 h-5" />
          }
        >
          Nuevo cuaderno
        </Button>
        {/* Modal */}
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Crear cuaderno
                </ModalHeader>
                <form action="">
                  <ModalBody>
                    <div className="flex flex-col gap-3">
                      <span className="flex gap-3">
                        <Input
                          type="text"
                          variant="underlined"
                          size="sm"
                          label="Título"
                          placeholder="Ex: Minería de datos"
                        />
                        <ColorPicker />
                      </span>
                      <Textarea
                        variant="underlined"
                        label="Descripción"
                        placeholder="Ex: Cuaderno de apuntes de la materia de minería de datos"
                      />
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Cancelar
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Crear cuaderno
                    </Button>
                  </ModalFooter>
                </form>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </section>
  )
}
