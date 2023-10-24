import NavbarPostulaciones from "../components/NavbarPostulaciones"
import { useAuth } from "../context/AuthContext"

const PostulacionesTaller = () => {

  const { rescuestAccepted,DeletePostulation } = useAuth()
  return (
    <>
        <NavbarPostulaciones/>
        <div className="container">
          <div className="container-fluid rounded-bottom-4 position-relative text-center p-3 border-top-0" style={{height:'auto', backgroundColor: '#5120d4'}}>
              <div className="container-fluid mt-1">
              <h1 className="text-light">Talleres postulados </h1>
                  <div className="container text-center text-light d-flex justify-content-evenly flex-wrap p-4">
                 

                      {rescuestAccepted != null ?
                      rescuestAccepted.map((taller) => (
                        <div key={taller.id_d_r_t} className="card mt-4" style={{width: "18rem"}}>
                        <div className="card-header">
                          <h3>{taller.company_name}</h3>       
                        </div> 
                      <div className="card-body">
                        <h5 className="card-title">Id de peticion aceptada: {taller.id_request}</h5>
                        <p className="card-text">Tipo de peticion: {taller.request_type}</p>
                        <p className="card-text">descripcion de la peticion: {taller.desciption}</p>
                        <p className="card-text">Tipo de peticion: {taller.request_type}</p>
                        <div className='d-grid gap-2 d-md-flex justify-content-md-end '>
                          <button className="btn btn-primary">aceptar</button>
                          <button onClick={() => {DeletePostulation(taller.id_d_r_t)}} className="btn btn-danger">rechazar</button>
                        </div>
                      </div>          
                    </div>
                      )):
                        <h1>no hay nada</h1>
                      }
                  </div>
              </div> 
              </div>
          </div>
    </>
  )
}

export default PostulacionesTaller