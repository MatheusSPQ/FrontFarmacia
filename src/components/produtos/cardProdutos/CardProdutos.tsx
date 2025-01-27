import React from "react"
import { Link } from "react-router-dom"
import type Produto from "../../../models/Produto"

interface CardProdutoProps {
  produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg flex flex-col justify-between">
      <div>
        <img src={produto.foto || "/placeholder.svg"} alt={produto.nome} className="h-48 w-full object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">{produto.nome}</h3>
          {produto.categoria && <p className="mt-1 text-sm text-gray-500">{produto.categoria.nome}</p>}
          <p className="mt-2 text-lg font-semibold text-gray-900">R$ {produto.preco}</p>
        </div>
      </div>
    </div>
  )
}

export default CardProduto