import NavbarPeticiones from "../components/NavbarPeticiones"
import { useAuth } from "../context/AuthContext"
import { Link } from "react-router-dom"

const EmpresaPeticiones = () => {
    const { getRequestsUser, DeletRequest } = useAuth()

  return (
    <>
        <NavbarPeticiones/>
        <div className="justify-content-center align-items-center" style={{width: "100%", height: "auto"}}>
          <div className='container p-2 rounded-bottom-4 'style={{backgroundColor: '#5120d4', height: "auto"}}>
            <h1 className="text-light">Peticiones para talleres</h1>
            <div className="d-flex justify-content-evenly flex-wrap p-4">
                { getRequestsUser != null ?
                getRequestsUser.map((request) => (
                    <div key={request.id} className="card mt-4" style={{width: "18rem"}}>
                        <div className="card-header d-flex justify-content-between">
                          <h3>{request.request_type}</h3>
                          <h3>{request.id}</h3>
                        </div>
                      <div className="card-body">
                        <h5 className="card-title">{request.r_state}</h5>
                        <h6>descripcion:</h6>
                        <p className="card-text">{request.description}</p>
                        <div className='d-grid gap-2 d-md-flex justify-content-md-end '>
                        <button onClick={() => DeletRequest(request.id)} className="btn btn-danger">Eliminar</button>
                        <Link to={`/empresa-peticiones/${request.id}`}>
                                <button type='button' data-bs-toggle="modal" className="btn text-light btn-sm"  data-bs-target="#actualizacionM" style={{backgroundColor: '#1db0c0', width: ''}}>actualizar</button>
                        </Link>
                        </div>
                        </div>
                      </div>          
                )):
                    <div>
                        <h1>no hay nada</h1>
                    </div>
            }
            </div>
        </div>
        </div>

    </>
  )
}

export default EmpresaPeticiones