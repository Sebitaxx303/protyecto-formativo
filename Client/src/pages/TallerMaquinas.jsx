import NavbarMaquinas from '../components/NavbarMaquinas.jsx'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams} from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { useEffect } from 'react'

const TallerMaquinas = () => {

const { UpdateMachine, getAMachine, getMachine, DeleteMachine, errors: RegisterErrors } = useAuth();
const { register ,handleSubmit, setValue, formState:{errors}  } = useForm()
const navigate = useNavigate()
const params = useParams()

useEffect(() => {
  async function loadMachine(){
    if(params.id_machine)
   {const machine = await getAMachine(params.id_machine)
    console.log(machine)
    setValue('machine_type', machine.machine_type)
    setValue('mach_description', machine.mach_description)
  }
  }
  loadMachine()
})

const submitUpdate = handleSubmit( async (data) => {
    UpdateMachine(params.id_machine, data)
  navigate('/taller-maquinas')
}) ;
  return (
    <>
        <NavbarMaquinas/>
        <div className="justify-content-center align-items-center" style={{width: "100%", height: "auto"}}>
          <div className='container p-2 rounded-bottom-4  'style={{backgroundColor: '#5120d4', height: "auto"}}>
                      { getMachine !== null ?
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
                              <td style={{ backgroundColor: '#12245f'}}>
                              <td style={{ backgroundColor: '#12245f'}} className='text-light offset-1 col-6'>
                                <button onClick={() => DeleteMachine(machine.id_machine) } type='button' className='btn btn-danger col text-light'>Eliminar</button>
                                </td>
                              <td style={{ backgroundColor: '#12245f'}} className='text-light offset-1 col-6'>
                                <Link to={`/taller-maquinas/${machine.id_machine}`}>
                                  <button type='button' data-bs-toggle="modal" className="btn text-light"  data-bs-target="#actualizacionM" style={{backgroundColor: '#1db0c0', width: ''}}>actualizar</button>
                                  </Link>
                                </td>

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
                                      <form onSubmitCapture={submitUpdate} >
                                        <div className="mb-3">
                                          <label>Tipo de maquina</label>
                                          <select className="form-control" {...register("machine_type", {required: true})} placeholder="Ingrese su tipo de maquina">
                                            <option>busos</option>
                                            <option>camisas</option>
                                            <option>jeans</option>
                                            <option>medias</option>
                                            <option>zapatos</option>
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
                                          <button type='submit' className='btn btn-primary' data-bs-dismiss="modal" aria-label="Close">actualizar </button>
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
                              </td>
                            </tr>
                          </tbody>
                        </table> 
                      </div>
                          )
                          ):
                          <div className='position-relative mt-4 bg-light rounded-4 text-secondary  ' style={{ height:'50vh', border: 'dotted #12245f 2px'}}>
                            <h1 className='position-absolute top-50 start-50 translate-middle'>No hay maquinas registradas</h1>
                          </div>
                      }
                </div>
            </div>

    </>
  )
}
export default TallerMaquinas
