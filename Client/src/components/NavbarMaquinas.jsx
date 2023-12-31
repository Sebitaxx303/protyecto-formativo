import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';


const NavbarMaquinas = () => {
 const navigate = useNavigate()
const params = useParams()
  const { register, handleSubmit, formState:{errors} } = useForm();
  const { AddMachine, UpdateMachine, errors: RegisterErrors } = useAuth();
  const onSubmited = handleSubmit( async (data) => {
    AddMachine(data);
    })

    const submitUpdate = handleSubmit( async (data) => {
      UpdateMachine(params.id_machine, data)
    navigate('/taller-maquinas')
    }) ;
  return (
  <>
      <nav className="navbar row navbar-expand-lg" style={{backgroundColor: '#12245f'}}>
      
        <div className='d-flex'>
        <h1 className='text-light p-3 '>Registro de maquinas</h1>
              {/*ABRE OPCIONES DEL NAVBAR*/} 
              <button className="navbar-toggler" style={{color: "white", border: "none"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-filter-square-fill" style={{width: '100%'}}></i>
              </button>
              <div className="collapse navbar-collapse position-relative " style={{justifyContent: 'end'}} id="navbarNavDropdown">
                    <ul className="navbar-nav " style={{justifyContent: 'center', alignItems:'center'}}>
                      <li className='nav-item'>
                        <Link className='list-item text-wrap text-center' to="/taller-inicio">Volver</Link>
                      </li>
                      <li className='nav-item'>
                        <button className='list-item text-wrap text-center'  type="button" data-bs-toggle="modal" data-bs-target="#registroMaquinas">Registrar nueva maquina
                        </button>
                      </li>
                    </ul>
              </div>
              {/*CIERRA OPCIONES DEL NAVBAR*/} 
              {/*ABRE MODAL DE REGSITRO DE MAQUINA*/} 
              <div className="modal fade" id="registroMaquinas" tabIndex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                  <div className="modal-content" style={{border: 'Solid'}}>
                                    <div className="modal-header">
                                      <h1 className="modal-title fs-5"  id="exampleModalLabel">Registrar maquina</h1>
                                      <button type="button" className="btn-close"   data-bs-dismiss="modal" aria-label="Close"></ button>
                                    </div>
                                    <div className="modal-body">
                                    {
                                      RegisterErrors.map((error, i)=> (
                                        <div className='bg-danger' key={i}>
                                          {error}
                                          </div>
                                      ))
                                    }
                                      <form>    
                                      
                                      <div className="mb-3">
                                          <label>Tipo de maquina</label>
                                          <select className="form-control" {...register("machine_type", {required: true})} placeholder="Ingrese su tipo de maquina">
                                            <option>Máquina botonadora</option>
                                            <option>Máquina cerradora de codo</option>
                                            <option>Máquina collarín</option>
                                            <option>Máquina fileteadora</option>
                                            <option>Máquina Flat Seamer</option>
                                            <option>Máquina ojaladora</option>
                                            <option>Máquina plana de dos agujas</option>
                                            <option>Máquina plana de una aguja</option>
                                            <option>Máquina presilladora</option>
                                            <option>Máquina pretinadora</option>
                                          </select>
                                        </div>
                                          {
                                            errors.machine_type && <p className='text-danger'>El tipo de maquina es obligatorio</p>
                                          }
                                          <div className="mb-3">
                                            <label htmlFor="" className="form-label">descripción</label>
                                            <input type="text" className="form-control" {...register("mach_description", {required: true})} aria-describedby="emailHelp"placeholder="Ingrese una descripcion de la maquina" autoComplete="off"/>
                                          </div>        
                                          {
                                            errors.mach_description && <p className='text-danger'>la descripcion es obligatoria</p>
                                          }
                                          <div className="mb-3">
                                            <label htmlFor="" className="form-label">Imagen</label>
                                            <input type="file" className="form-control" {...register("no", {required: false})} autoComplete="off" placeholder="ingrese una imagen de la maquina"/>
                                          </div>  
                                            <div className='d-flex  gap-2  justify-content-center'>
                                            <div className="d-grid gap-2 d-md-block">   
                                              <button onClick={onSubmited} type="submit"  className="btn text-light" data-bs-dismiss="modal"aria-label="close"   style={{backgroundColor: '#C23373'}}>Registrar</button>
                                            </div>   
                                            <div className="d-grid gap-2 d-md-block">
                                              <button className="btn btn-danger"  data-bs-target="#primermodal" aria-label="close"  data-bs-toggle="modal"data-bs-dismiss="modal" >Volver</ button>
                                            </div>
                                          </div>
                                      </form> 
                                    </div>
                                  </div>
                                </div>
              </div> 
              {/*CIERRA MODAL DE REGSITRO DE TALLER*/} 
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
                                          <label>Tipo de maquina</label>
                                          <select className="form-control" {...register("machine_type", {required: true})} placeholder="Ingrese su tipo de maquina">
                                          <option>Máquina botonadora</option>
                                            <option>Máquina cerradora de codo</option>
                                            <option>Máquina collarín</option>
                                            <option>Máquina fileteadora</option>
                                            <option>Máquina Flat Seamer</option>
                                            <option>Máquina ojaladora</option>
                                            <option>Máquina plana de dos agujas</option>
                                            <option>Máquina plana de una aguja</option>
                                            <option>Máquina presilladora</option>
                                            <option>Máquina pretinadora</option>
                                          </select>
                                        </div>
                                        <div className="mb-3">
                                          <label htmlFor="" className="form-label">descripción</label>
                                          <input type="text" className="form-control" {...register("mach_description", {required: false})} placeholder="Ingrese una descripcion de la maquina" autoComplete="off"/>
                                        </div>        
                                          {
                                            errors.mach_description && <p className='text-danger'>la descripcion es obligatoria</p>
                                          }
                                          <div className="mb-3">
                                            <label htmlFor="" className="form-label">Imagen</label>
                                            <input type="file" className="form-control" {...register("no", {required: false})} autoComplete="off" placeholder="ingrese una imagen de la maquina"/>
                                          </div>  
                                          <button onClick={submitUpdate} type='submit' className='btn btn-primary' data-bs-dismiss="modal" aria-label="Close">actualizar </button>
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

export default NavbarMaquinas
