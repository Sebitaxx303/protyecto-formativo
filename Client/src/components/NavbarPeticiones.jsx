import { Link } from "react-router-dom"

const NavbarPeticiones = () => {
  return (
    <>
        <nav className="navbar row navbar-expand-lg" style={{backgroundColor: '#12245f'}}>
        <div className='d-flex justify-content-around contaner-fluid'>
        <h1 className="text-light">Tus peticiones</h1>
              {/*ABRE OPCIONES DEL NAVBAR*/} 
              <button className="navbar-toggler" style={{color: "white", border: "none"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-filter-square-fill" style={{width: '100%'}}></i>
              </button>
              <div className="collapse navbar-collapse position-relative " style={{justifyContent: 'end'}} id="navbarNavDropdown">
                    <ul className="navbar-nav d-flex" style={{justifyContent: 'center', alignItems:'center'}}>
                      <li className='nav-item'>
                        <Link className='text-colapse text-center' to="/empresa-inicio">Volver</Link>
                      </li>
                    </ul>
              </div>
              {/*CIERRA OPCIONES DEL NAVBAR*/} 
            </div>
      </nav>
    </>
  )
}

export default NavbarPeticiones