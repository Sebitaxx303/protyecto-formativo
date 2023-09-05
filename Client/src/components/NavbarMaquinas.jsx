import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';


const NavbarMaquinas = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const { AddMachine, errors: RegisterErrors } = useAuth();
  const onSubmited = handleSubmit( async (values) => {
    AddMachine(values);

    })
  return (
  <>
      <nav className="navbar row navbar-expand-lg" style={{backgroundColor: '#79155B'}}>
        <div className='contaner-fluid'>
              <div className="nav-item h-auto  aling-content-center col-5 text-center float-start">
                  <img className="img-thumbnail" style={{borderRadius: '10%', width: '100px'}}    src="../images/download.png" alt=""/>
              </div>
              {/*ABRE OPCIONES DEL NAVBAR*/} 
              <div className="collapse navbar-collapse position-relative " style={{justifyContent: 'end'}} id="menu">
                    <ul className="navbar-nav d-flex" style={{justifyContent: 'center', alignItems:'center'}}>
                      <li className='list-item'>
                        <Link className='text-colapse text-center' to="/taller-inicio">Volver</Link>
                      </li>
                      <li className='list-item'>
                        <button className='list-item text-wrap text-center'  type="button" data-bs-toggle="modal" data-bs-target="#registroMaquinas">Registrar nueva maquina
                        </button>
                      </li>
                    </ul>
              </div>
              {/*CIERRA OPCIONES DEL NAVBAR*/} 
              {/*ABRE MODAL DE REGSITRO DE TALLER*/} 
              <div className="modal fade" id="registroMaquinas" tabIndex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-scrollable">
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
                                      <form onSubmit={onSubmited}>    
                                      
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
                                            <input type="file" className="form-control" {...register("no", {required: true})} autoComplete="off" placeholder="ingrese una imagen de la maquina"/>
                                          </div>        
                                          <button type="submit"  className="btn text-light" data-bs-dismiss="modal"aria-label="close"   style={{backgroundColor: '#C23373'}}>Registrar</button>
                                      </form> 
                                    </div>
                                    <div className="modal-footer justify-content-center">
                                      <div className="d-grid gap-2 d-md-block">
                                        <button className="btn btn-danger btn-sm"  data-bs-target="#primermodal" aria-label="close"  data-bs-toggle="modal"data-bs-dismiss="modal" >Volver</ button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
              </div> 
              {/*CIERRA MODAL DE REGSITRO DE TALLER*/} 
            </div>
      </nav>
  </>
  )
}

export default NavbarMaquinas
