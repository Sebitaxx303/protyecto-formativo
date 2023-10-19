import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useForm } from "react-hook-form"

const PerfilTaller = () => {
  const { register, handleSubmit, formState:{errors}  } = useForm();
  const { update, errors: RegisterErrors } = useAuth();
  const { logout } = useAuth();
  const { getUser } = useAuth();
  const onSubmitedUp = handleSubmit( async (values) => {
    update(values); 
    window.location.reload()
  })
    return(
        <>
        {
          
          Array.from(getUser).map(user => (
            
            <div className="container" key={user.id}>     
              
              <div className="container-fluid rounded-bottom-5 position-relative text-center p-3 border-top-0" style={{height:'auto', backgroundColor: '#5120d4', border: '1px solid black'}}>
              <div className="d-grid col-1 mx-auto float-start">
              <Link className='btn text-light z-2' style={{backgroundColor: '#12245f'}} to={'/taller-inicio'}>Volver</Link>
              </div> 
              <div className="d-grid col-1 mx-auto float-end"> 
              <Link onClick={logout} className='btn  text-light z-2'style={{backgroundColor: '#12245f'}}>Salir </Link>
              </div> 

                  {/**SE ABRE SECCION DE FOTO DE PERFIL DE USUATIO*/}  
                  <h1 className="text-light">{user.company_name}</h1>
                  <div className="position-absolute start-50 translate-middle z-0" style={{marginTop: '10rem'}}>
                    <div className="preview-container" style={{border: '5px solid #12245f '}}>
                      <div className="btn-img input-container" style={{position: 'absolute', top: '13rem'}}> 
                        <input type="file" id="archivo"/>   
                      </div> 
                    </div>
                  </div>
                  {/**SE CIERRA SECCION DE FOTO DE PERFIL DE USUATIO*/}  
                  {/**SE ABRE SECCION DE INFORMACION DEL TALLER*/} 
                  <div className='container rounded ' style={{ marginTop:'20rem' ,width: '50%', border: '2px solid #12245f',    backgroundColor: 'rgba(165, 148, 148)', height: 'auto'}}>    
                    {/**SE ABRE SECCION DE NOMBRE DEL TALLER*/} 
                      <div>
                   <div className=" text-center">
                     <h3 className=""></h3>
                   </div>
                   <div className="container-fluid">
                      <div className="d-grid col-6 mx-auto">
                        <button className='btn btn-primary' data-bs-target="#modalActualizacionUsuario"   data-bs-toggle="modal">Editar perfil
                        </button>
                        <div className="modal fade" id="modalActualizacionUsuario" tabIndex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-scrollable">
                                  <div className="modal-content" style={{border: 'Solid'}}>
                                    <div className="modal-header">
                                      <h1 className="modal-title fs-5"  id="exampleModalLabel">Iniciar sesión</h1>
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
                                      <form onSubmit={onSubmitedUp}>    
                                      

                                          <div className="mb-3">
                                            <label htmlFor="" className="form-label">Nombre de la entidad</label>
                                            <input type="text" className="form-control" {...register("company_name", {required: true})} aria-describedby="emailHelp"placeholder="Ingrese el nombre de la entidad" autoComplete="off"/>
                                          </div>        
                                          {
                                            errors.company_name && <p className='text-danger'>El nombre de la entidad es obligatorio</p>
                                          }
                                          <div className="mb-3">
                                            <label htmlFor="" className="form-label">RUT</label>
                                            <input type="number" className="form-control" {...register("rut", {required: true})} autoComplete="off" placeholder="Ingrese el RUT de la entidad"/>
                                          </div>        
                                          {
                                            errors.rut && <p className='text-danger'>El RUT es obligatorio</p>
                                          }
                                          <div className="mb-3">
                                            <label htmlFor="" className="form-label">direccion</label>
                                            <input type="text" className="form-control" {...register("u_address", {required: true})} aria-describedby="emailHelp"placeholder="Ingrese la direccion de la entidad" autoComplete="off"/>
                                          </div>        
                                          {
                                            errors.u_address && <p className='text-danger'>La dirección es obligatoria</p>
                                          }
                                          <div className="mb-3">
                                              <label htmlFor="exampleInputPassword1" className="form-label">Numero de telefono</label>
                                              <input type="number" className="form-control" {...register("phone_number", {required: true})} autoComplete="off" placeholder="Ingrese su número telefonico"/>
                                          </div> 
 
                                          <button type="submit"  className="btn text-light" style={{backgroundColor: '#1db0c0'}}>Actualizar</button>
                                      </form> 
                                    </div>
                                    <div className="modal-footer justify-content-center">
                                      <div className="d-grid gap-2 d-md-block">
                                        <button className="btn btn-danger btn-sm"  data-bs-target="#primermodal" aria-label="close"  data-bs-toggle="modal"style={{backgroundColor: '#5120d4'}}>Volver</ button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                        </div>     
                      </div>   
                      <ul className='container-fluid'>
                          <li className="row align-items-center">
                              <div className='col-6 text-end'> Direcciòn:</div> 
                              <div className='col-6 text-start'>{user.u_address}</div>
                          </li>
                          <li className="row align-items-center">
                            <div className='col-6 text-end'>Telefono:</div> 
                            <div className='col-6 text-start'>{user.phone_number}</div>
                          </li>
                          <li className="row align-items-center">
                            <div className='col-6 text-end'>A cargo:</div> 
                            <div className='col-6 text-start'>sebitas</div> 
                          </li>
                          <li className="row align-items-center">
                            <div className='col-6 text-end'>tipo de usuario:</div> 
                            <div className='col-6 text-start'>{user.user_type}</div> 
                          </li>
                          <li className="row align-items-center">
                            <div className='col-6 text-end'>Fecha de creacion:</div> 
                            <div className='col-6 text-start'>16/08/2023</div> 
                          </li>
                        </ul>
                   </div>
                   </div>
                  </div>
                  
              </div>
             
            </div>
            

          ))
        }
                 

            {/**SE ABRE EL FOOTER*/}         
            {/* <footer className="container-fluid bg-black text-center p-5 mt-4">
              &copy; 2023 Línea de Código
            </footer> */}
            {/**SE CIERRA EL FOOTER*/}         
        </>
    )
}
export default PerfilTaller