import type React from "react"
import { useState } from "react"
import type Categoria from "../../../models/Categoria"
import { deletar, atualizar } from "../../../services/Service"
import { DNA } from "react-loader-spinner"

interface CardCategoriaProps {
  categoria: Categoria
  atualizarCategorias: () => void
}

function CardCategoria({ categoria, atualizarCategorias }: CardCategoriaProps) {
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false)
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false)
  const [editedNome, setEditedNome] = useState(categoria.nome)
  const [isLoading, setIsLoading] = useState(false)

  const handleDelete = async () => {
    setIsLoading(true)
    try {
      await deletar(`/categorias/${categoria.id}`, {})
      atualizarCategorias()
    } catch (error) {
      console.error("Erro ao deletar categoria:", error)
    } finally {
      setIsLoading(false)
      setIsDeletePopupOpen(false)
    }
  }

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const categoriaAtualizada = { ...categoria, nome: editedNome }
      await atualizar(`/categorias`, categoriaAtualizada, atualizarCategorias, {})
      atualizarCategorias()
    } catch (error) {
      console.error("Erro ao atualizar categoria:", error)
    } finally {
      setIsLoading(false)
      setIsEditPopupOpen(false)
    }
  }

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg flex flex-col justify-between">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{categoria.nome}</h3>
        <p className="text-gray-600">ID: {categoria.id}</p>
      </div>
      <div className="flex mt-4">
        <button
          onClick={() => setIsEditPopupOpen(true)}
          className="w-full text-white bg-blue-500 
                    hover:bg-blue-600 flex items-center justify-center py-2 px-4 rounded-bl-lg transition duration-200"
        >
          Editar
        </button>
        <button
          onClick={() => setIsDeletePopupOpen(true)}
          className="text-white bg-red-500 
                    hover:bg-red-600 w-full flex items-center justify-center py-2 px-4 rounded-br-lg transition duration-200"
        >
          Deletar
        </button>
      </div>

      {isDeletePopupOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
          <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
            <h3 className="text-lg font-bold mb-4">Confirmar exclusão</h3>
            <p>Tem certeza que deseja deletar a categoria "{categoria.nome}"?</p>
            <div className="mt-4 flex justify-end space-x-3">
              <button
                onClick={() => setIsDeletePopupOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                disabled={isLoading}
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                disabled={isLoading}
              >
                {isLoading ? (
                  <DNA visible={true} height="24" width="24" ariaLabel="dna-loading" wrapperClass="dna-wrapper" />
                ) : (
                  "Sim, deletar"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditPopupOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
          <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
            <h3 className="text-lg font-bold mb-4">Editar Categoria</h3>
            <form onSubmit={handleEdit}>
              <div className="mb-4">
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                  Nome da Categoria
                </label>
                <input
                  type="text"
                  id="nome"
                  value={editedNome}
                  onChange={(e) => setEditedNome(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mt-4 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsEditPopupOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                  disabled={isLoading}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <DNA visible={true} height="24" width="24" ariaLabel="dna-loading" wrapperClass="dna-wrapper" />
                  ) : (
                    "Salvar"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default CardCategoria

