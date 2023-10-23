import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Inicio from './pages/Inicio'
import { AuthProvider } from './context/AuthContext'
import InicioTaller from './pages/TallerInicio'
import ProtectedRoute from './protectedRoute'
import PerfilTaller from './pages/TallerPerfil'
import TallerMaquinas from './pages/TallerMaquinas'
import TallerRoutes from './TallerRoutes'
import EmpresaRoutes from './EmpresaRoutes'
import EmpresaInicio from './pages/EmpresaInicio'
import EmpresaPerfil from './pages/EmpresaPerfil'
import EmpresaPeticiones from './pages/EmpresaPeticiones'
import HistorialPeticiones from './pages/HistorialPeticiones'

const App = () => {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio/>}/>

            <Route element={<ProtectedRoute/>}>
              <Route element={<TallerRoutes/>}>
                <Route path='/taller-inicio' element={<InicioTaller/>}/>
                <Route path='/taller-perfil' element={<PerfilTaller/>}/>
                <Route path='/taller-maquinas' element={<TallerMaquinas/>}/>
                <Route path='/taller-peticiones' element={<HistorialPeticiones/>}/>
                <Route path='/taller-maquinas/:id_machine' element={<TallerMaquinas/>}/>
              </Route>
              <Route element={<EmpresaRoutes/>}>
                <Route path='/empresa-inicio' element={<EmpresaInicio/>}/>
                <Route path='/empresa-perfil' element={<EmpresaPerfil/>}/>
                <Route path='/empresa-peticiones' element={<EmpresaPeticiones/>}/>
              </Route>
            </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>

    </>
  )
}

export default App