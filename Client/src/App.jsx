import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Inicio from './pages/Inicio'
import { AuthProvider } from './context/AuthContext'
import InicioTaller from './pages/InicioTaller'
import ProtectedRoute from './protectedRoute'

const App = () => {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio/>}/>


            <Route element={<ProtectedRoute/>}>
                <Route path='/taller-inicio' element={<InicioTaller/>}/>
            </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>

    </>
  )
}

export default App