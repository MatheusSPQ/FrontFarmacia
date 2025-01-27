import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Categorias from './pages/categorias/Categorias'
import CadastrarCategoria from './pages/categorias/CadastrarCategoria'



function App() {
 //rotas finalizadas
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={< Categorias/>} />
              <Route path="/produtos" element={<Home />} />
              <Route path="/cadastrarCategoria" element={<CadastrarCategoria />} />
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
