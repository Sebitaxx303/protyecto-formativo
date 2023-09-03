import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const NavbarTaller = () => {
    const { logout } = useAuth();
  return (
    <>
        {/*ABRE NAVBAR TALLER*/}
        <nav className="navbar navbar-expand-lg container-fluid z-2 d-flex" style={{backgroundColor: '#79155B', border: '2px solid gray'}}>
                <div className="container-fluid">
                    <div className="nav-item h-auto col-2 position-relative text-center"><img className="img-thumbnail" style={{borderRadius: '100%', width: '100px'}} src="../images/download.png" alt=""/>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>Name
                        <div className="collapse navbar-collapse position-relativa " style={{justifyContent: 'end'}}   id="navbarNavDropdown">
                            <div id="menu" style={{width:'100%', display: 'flex'}} >
                                <ul className="navbar-nav d-flex" style={{justifyContent: 'center', alignItems:'center'}}  id="menu">
                                    <li className="nav-item ">
                                        <Link className="text-wrap text-center" to="/HistorialPeticiones">Historial de  peticiones</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="text-wrap text-center" to="/Maquinas">Registrar maquinas</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="text-wrap text-center" to="/RegistroCalificaciones">Registro de    calificaciones</Link>
                                    </li>
                                    <li className="nav-item"><Link className="text-colapse text-center" to="#">Opciones de  usuario</Link> 
                                        <ul className="dropdown-menu">
                                        <li className="dropdown-item"><Link className="text-wrap text-center" to="InfoCuentaTaller">Informacion de la cuenta</Link></li>
                                        <button type="button" className="dropdown-item text-wrap text-center" onClick={logout}>Cerrar sesión</button> 
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
        </nav>
        {/*ABRE NAVBAR TALLER*/}
    </>
  )
}

export default NavbarTaller