import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { cadastrar } from "../../services/Service"
import { DNA } from "react-loader-spinner"

function CadastrarCategoria() {
  const [nome, setNome] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const header = {
        headers: {
          "Content-Type": "application/json",
        },
      }
      await cadastrar("/categorias", { nome }, () => {}, header)
      navigate("/categorias")
    } catch (error) {
      console.error("Erro ao cadastrar categoria:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Cadastrar Nova Categoria</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="nome" className="block text-gray-700 text-sm font-bold mb-2">
            Nome da Categoria
          </label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={isLoading}
          >
            {isLoading ? (
              <DNA visible={true} height="24" width="24" ariaLabel="dna-loading" wrapperClass="dna-wrapper" />
            ) : (
              "Cadastrar"
            )}
          </button>
          <button
            type="button"
            onClick={() => navigate("/categorias")}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={isLoading}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  )
}

export default CadastrarCategoria

