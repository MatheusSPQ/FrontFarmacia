import type React from "react"
import { useState } from "react"
import { cadastrar } from "../../../services/Service"

interface FormCategoriaProps {
  atualizarCategorias: () => void
  setIsPopupOpen: (isOpen: boolean) => void
}

function FormCategoria({ atualizarCategorias, setIsPopupOpen }: FormCategoriaProps) {
  const [nome, setNome] = useState("")
  const [isFormOpen, setIsFormOpen] = useState(false)

  const openForm = () => {
    setIsFormOpen(true)
    setIsPopupOpen(true)
  }

  const closeForm = () => {
    setIsFormOpen(false)
    setIsPopupOpen(false)
    setNome("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await cadastrar("/categorias", { nome }, atualizarCategorias, {})
      closeForm()
    } catch (error) {
      console.error("Erro ao cadastrar categoria:", error)
    }
  }

  return (
    <>
      <button
        onClick={openForm}
        className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
      >
        Nova Categoria
      </button>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
          <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
            <h3 className="text-lg font-bold mb-4 text-gray-900">Cadastrar Nova Categoria</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                  Nome da Categoria
                </label>
                <input
                  type="text"
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-900"
                  required
                />
              </div>
              <div className="mt-4 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={closeForm}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                >
                  Cancelar
                </button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default FormCategoria

