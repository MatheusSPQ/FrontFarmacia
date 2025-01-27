import { useState, useEffect } from "react"
import type Produto from "../../../models/Produto"
import CardProduto from "../cardProdutos/CardProdutos"
import { DNA } from "react-loader-spinner"
import { buscar } from "../../../services/Service"

function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([])
    const [isLoading, setIsLoading] = useState(true)
  
    async function buscarProdutos() {
      try {
        await buscar("/produtos", setProdutos, {})
        setIsLoading(false)
      } catch (error: any) {
        console.error("Erro ao buscar produtos:", error)
        setIsLoading(false)
      }
    }
  
    useEffect(() => {
      buscarProdutos()
    }, [buscarProdutos]) // Added buscarProdutos to the dependency array

    return (
    <>
        {isLoading ? (
        <DNA
        visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      ) : (
        <div
          className="container mx-auto my-4 
                    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      )}
    </>
  )
}

export default ListaProdutos

