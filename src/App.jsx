import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PokeInfo from './pages/PokeInfo'
import Footer from './components/Footer'
import footer from './components/styles/footer.css'

function App() {

  return (
    <>
      <div className="app">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:name' element={<PokeInfo />} />
          </Route>
        </Routes>

      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
