import type React from "react"
import type Produto from "../../models/Produto"
﻿import ListarProdutos from "../../components/produtos/listarProdutos/ListarProdutos"

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Farmácia Generation</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-blue-500 rounded-lg shadow-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Bem-vindo à Farmácia Generation</h2>
              <p className="text-lg">
                Sua fonte confiável para todas as suas necessidades de saúde e bem-estar. Oferecemos uma ampla gama de
                produtos farmacêuticos, medicamentos de venda livre e suplementos de saúde para manter você e sua
                família saudáveis.
              </p>
            </div>
          </div>

          {/* Products Section */}
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Produtos</h2>
            <ListarProdutos/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home