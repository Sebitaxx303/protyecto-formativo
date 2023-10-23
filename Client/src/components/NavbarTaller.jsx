import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


const NavbarTaller = () => {
    const refresh = () => {
        window.location.reload()
    }
    const { logout } = useAuth();
  return (
    <>
        {/*ABRE NAVBAR TALLER*/}
        <nav className="navbar navbar-expand-lg container-fluid z-2 d-flex" style={{backgroundColor: '#12245f'}}>
            
                <div className="container-fluid">
                    <div className="nav-item h-auto col-2 position-relative text-center">
                    {/* <img className="img-thumbnail" style={{borderRadius: '100%', width: '100px'}} src="../images/download.png" alt=""/>  */}
                    </div>
                    <button className="navbar-toggler" style={{color: "white", border: "none"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-filter-square-fill" style={{width: '100%'}}></i>
                    </button>
                        <div className="collapse navbar-collapse position-relative " style={{justifyContent: 'end'}}   id="navbarNavDropdown">
                            <div id="menu" style={{width:'100%', display: 'flex'}} >
                                <ul className="navbar-nav d-flex" style={{justifyContent: 'center', alignItems:'center'}}  id="menu">
                                    <li className="nav-item ">
                                        <Link className="text-wrap text-center"to="/taller-peticiones">Historial de peticiones</Link>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" onClick={refresh}><Link className="text-wrap text-center" to="/taller-maquinas">Registrar maquinas</Link></button>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="text-colapse text-center" to="#">Opciones de  usuario</Link> 
                                        <ul className="dropdown-menu">
                                        <li className="dropdown-item">
                                            <Link className="text-wrap text-center" to="/taller-perfil">Informacion de la cuenta</Link>
                                        </li>
                                        <li className="dropdown-item"  onClick={logout}>
                                            <Link className="text-wrap text-center">Cerrar sesión</Link>
                                            </li> 
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