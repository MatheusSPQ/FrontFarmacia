import React, { useState, useEffect, useCallback } from "react"
import type Categoria from "../../../models/Categoria"
import CardCategoria from "../../categorias/cardCategorias/CardCategorias"
import { DNA } from "react-loader-spinner"
import { buscar } from "../../../services/Service"

function ListarCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const buscarCategorias = useCallback(async () => {
    setIsLoading(true)
    try {
      await buscar("/categorias", setCategorias, {})
    } catch (error: any) {
      console.error("Erro ao buscar categorias:", error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    buscarCategorias()
  }, [buscarCategorias])

  return (
    <div className="container mx-auto my-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Categorias</h2>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <DNA visible={true} height="80" width="80" ariaLabel="dna-loading" wrapperClass="dna-wrapper" />
        </div>
      ) : categorias.length === 0 ? (
        <p className="text-center text-gray-600">Nenhuma categoria encontrada.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categorias.map((categoria) => (
            <CardCategoria key={categoria.id} categoria={categoria} atualizarCategorias={buscarCategorias} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ListarCategorias

