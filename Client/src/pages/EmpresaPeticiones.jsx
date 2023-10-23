import NavbarPeticiones from "../components/NavbarPeticiones"
import { useAuth } from "../context/AuthContext"

const EmpresaPeticiones = () => {
    const { getRequestsUser, DeletRequest } = useAuth()

  return (
    <>
        <NavbarPeticiones/>
        <div className="justify-content-center align-items-center" style={{width: "100%", height: "auto"}}>
          <div className='container p-2 rounded-bottom-4  'style={{backgroundColor: '#5120d4', height: "auto"}}>
                { getRequestsUser != null ?
                getRequestsUser.map((request) => (
                    <div className="container-fluid" key={request.id}>
                        <div className=" mt-4 rounded-2 row bg-light text-center p-2">  
                            <div className="col-2">
                                <h5>ID</h5>
                                <p>{request.id}</p>
                            </div>
                            <div className="col-1">
                                <h5>Estado de peticion</h5>
                                <p>{request.r_state}</p>
                            </div>
                            <div className="col-1">
                                <h5>Tipo de peticion</h5>
                                <p>{request.request_type}</p>
                            </div>
                            <div className="col-2">
                                <h5>Fecha de publicacion</h5>
                                <p>{request.start_date}</p>
                            </div>
                            <div className="col-2">
                                <h5>Descripcion</h5>
                                <p>{request.description}</p>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-primary">Editar</button>
                            </div>
                            <div className="col-2">
                                <button onClick={() => DeletRequest(request.id)} className="btn btn-danger">Eliminar</button>
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

    </>
  )
}

export default EmpresaPeticiones