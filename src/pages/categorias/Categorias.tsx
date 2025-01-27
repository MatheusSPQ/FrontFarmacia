import type React from "react"
import ListarCategorias from "../../components/categorias/listarCategorias/ListarCategoria"

const CategoriesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Categorias de Produtos</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-blue-500 rounded-lg shadow-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Explore Nossas Categorias</h2>
              <p className="text-lg">
                Descubra uma ampla variedade de produtos organizados em categorias para facilitar sua busca. Desde
                medicamentos até suplementos, temos tudo o que você precisa para cuidar da sua saúde.
              </p>
            </div>
          </div>

          {/* Categories Section */}
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Todas as Categorias</h2>
            <ListarCategorias />
          </div>
        </div>
      </main>
    </div>
  )
}

export default CategoriesPage