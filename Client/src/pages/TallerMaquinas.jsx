
import NavbarMaquinas from '../components/NavbarMaquinas.jsx'
import { useAuth } from '../context/AuthContext.jsx'

const TallerMaquinas = () => {
const { getMachine, DeleteMachine } = useAuth();
  return (
    <>
        <NavbarMaquinas/>
        <div className="justify-content-center align-items-center" style={{width: "100%", height: "auto"}}>
          <div className='container p-2 rounded-bottom-4  'style={{backgroundColor: '#5120d4', height: "auto"}}>
                      { getMachine != null ?
                      getMachine.map((machine )=> (
                      <div className='rounded m-4 p-3' style={{border: "2px solid white", backgroundColor: '#12245f'}} key={machine.id_machine}> 
                        <table className="table mt-2 text-center container-fluid">
                        <thead>
                          <tr>
                            <th style={{ backgroundColor: '#12245f'}} className='text-light' scope="col"></th>
                            <th style={{ backgroundColor: '#12245f'}} className='text-light' scope="col">Id</th>
                            <th style={{ backgroundColor: '#12245f'}} className='text-light' scope="col">Tipo de maquina</th>
                            <th style={{ backgroundColor: '#12245f'}} className='text-light' scope="col">descripcion</th>
                          </tr>
                        </thead>
                            <tbody>
                            <tr> 
                              <td style={{ backgroundColor: '#12245f'}} className='text-light'>{machine.photo}</td>
                              <th style={{ backgroundColor: '#12245f'}} className='text-light'>{machine.id_machine}</th>
                              <td style={{ backgroundColor: '#12245f'}} className='text-light'>{machine.machine_type}</td>
                              <td style={{ backgroundColor: '#12245f'}} className='text-light'>{machine.mach_description}</td>
                              <div style={{ backgroundColor: '#12245f'}}>
                              <td style={{ backgroundColor: '#12245f'}} className='text-light offset-1 col-6'><button onClick={() => DeleteMachine(machine.id_machine) } type='button' className='btn btn-danger col text-light'>Eliminar</button></td>
                              <td style={{ backgroundColor: '#12245f'}} className='text-light offset-1 col-6'><button type='button' className='btn btn-info col text-light'>Actualizar</button></td>
                              <div className="modal fade" id="primermodal" tabIndex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                  <div className="modal-content" style={{border: 'Solid'}}>
                                    <div className="modal-header">
                                      <h1 className="modal-title fs-5"  id="exampleModalLabel">Iniciar sesión</h1>
                                      <button type="button" className="btn-close"   data-bs-dismiss="modal" aria-label="Close"></ button>
                                    </div>
                                    <div className="modal-body">
                                      {
                                         SigninErrors.map((error, i)=> (
                                           <div className='bg-danger text-light rounded text-center' key={i}>
                                             {error}
                                             </div>
                                         ))
                                      }
                                      <form onSubmit={onSubmitedLog}>

                                          {
                                            errors.email && <p className='text-danger'>El email es obligatorio</p>
                                          }  
                                        <div className="input-box">                                       
                                          <span className="icon"><i className="bi bi-envelope-fill"></i><ion-icon name="mail"></ion-icon>
                                          </span>
                                          <input type="email" {...register("email", {required: true})}/>
                                          <label htmlFor="Email">Email</label>
                                        </div>
                                          {
                                              errors.u_password && <p className='text-danger'>La contraseña es obligatoria</p>
                                          }
                                        <div className="input-box">
                                          <span className="icon"><ion-icon  name="lock-closed"><i className="bi  bi-key-fill"></i></ion-icon></span>
                                          <input type="password" {...register("u_password", {required: true})} />
                                          <label htmlFor="password">Contraseña</label>
                                        </div>

                                        <button type="submit" className="btn text-light" data-bs-dismiss="modal" aria-label="Close"  style={{backgroundColor: '#1db0c0', width: '100%'}}>Entrar</button>
                                      </form>
                                    </div>
                                    <div className="modal-footer justify-content-center">
                                      <p>¿No tienes una cuenta?</p>
                                      <div className="d-grid gap-2 d-md-block">
                                        <Link to="/"><button className="btn btn-sm text-light" style={{backgroundColor: '#5120d4'}}  data-bs-target="#modalRegistroTaller"   data-bs-toggle="modal">Registarme</ button></Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              </div>
                            </tr>
                          </tbody>
                        </table> 
                      </div>
                          )
                          ):
                          <div className='mt-4'>
                            <h1>no hay mauinas</h1>
                          </div>
                      }
                </div>
            </div>

    </>
  )
}
export default TallerMaquinas
