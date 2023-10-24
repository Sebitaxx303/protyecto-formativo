import { Link, useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";

const NavbarPeticiones = () => {
  const navigate = useNavigate()
  const params = useParams()
  const { register, handleSubmit, formState:{errors} } = useForm();
  const { updateRequest, errors: RegisterErrors } = useAuth();
  const submitUpdate = handleSubmit( async (data) => {
    updateRequest(params.id, data)
  navigate('/empresa-peticiones')
  }) ;

  return (
    <>
        <nav className="navbar row navbar-expand-lg" style={{backgroundColor: '#12245f'}}>
        <div className='d-flex justify-content-around contaner-fluid'>
        <h1 className="text-light p-3">Tus peticiones</h1>
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
                {/* MODAL DE ACTULAIZACION */}
                <div className="modal fade" id="actualizacionM" tabIndex="-1"  aria-labelledby="exampleModalLabel"    aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                  <div className="modal-content" style={{border: 'Solid'}}>
                                    <div className="modal-header">
                                      <h1 className="modal-title fs-5"  id="exampleModalLabel">Actualizacion de datos</h1>
                                      <button type="button" className="btn-close"  data-bs-dismiss="modal" aria-label="Close"></ button>
                                    </div>
                                    <div className="modal-body">
                                      {
                                         RegisterErrors.map((error, i)=> (
                                           <div className='bg-danger text-light rounded text-center' key={i}>
                                             {error}
                                             </div>
                                         ))
                                      }

                                      {/* FORMULARIO DE ACTUALIZACION */}
                                      <form  >
                                        <div className="mb-3">
                                          <label>Estado de peticion</label>
                                          <select className="form-control" {...register("r_state", {required: true})} placeholder="Ingreseel estado de su petición">
                                          <option>Activa</option>
                                          <option>Inactiva</option>
                                          </select>
                                        </div>
                                        <div className="mb-3">
                                          <label>tipo de peticion</label>
                                          <select className="form-control" {...register("request_type", {required: true})} placeholder="Ingreseel estado de su petición">
                                            <option>acabados</option>
                                            <option>hilatura</option>
                                            <option>tejeduria</option>
                                            <option>tintura</option>
                                          </select>
                                        </div>
                                        <div className="mb-3">
                                          <label htmlFor="" className="form-label">descripción</label>
                                          <textarea type="text" className="form-control" {...register("description", {required: true})} placeholder="Ingrese una descripcion de la peticion" autoComplete="off"/>
                                        </div>        
                                          {
                                            errors.mach_description && <p className='text-danger'>la descripcion es obligatoria</p>
                                          }
                                          <div className="mb-3">
                                            <label htmlFor="" className="form-label">cantidad</label>
                                            <input type="number" className="form-control" {...register("amount", {required: false})} autoComplete="off" placeholder="ingrese la cantidad de prendas a confeccionar"/>
                                          </div>  
                                          <button onClick={submitUpdate} type='submit' className='btn btn-primary' data-bs-dismiss="modal" aria-label="Close">actualizar</button>
                                      </form>
                                      {/* FORMULARIO DE ACTUALIZACION */}
                                    </div>
                                    <div className="modal-footer justify-content-center">
                                      <div className="d-grid gap-2 d-md-block">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            {/* MODAL DE ACTULAIZACION */}
            </div>
      </nav>
    </>
  )
}

export default NavbarPeticiones