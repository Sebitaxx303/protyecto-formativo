import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useForm  } from "react-hook-form"
const NavbarEmpresa = () => {
    const { logout, AddRequest, errors: RegisterErrors  } = useAuth();
    const { register, handleSubmit, formState:{errors} } = useForm()

    const sexo = handleSubmit( async (data) =>{
        AddRequest(data)
    })
  return (
    <>
        {/*ABRE NAVBAR TALLER*/}
        <nav className="navbar navbar-expand-lg container-fluid d-flex position-static" style={{backgroundColor: '#12245f'}}>
            
                <div className="d-flex container-fluid">
                  <h1 className="text-light p-3">Inicio</h1>
                    <div className="nav-item h-auto col-2 position-relative text-center">
                    {/* <img className="img-thumbnail" style={{borderRadius: '100%', width: '100px'}} src="../images/download.png" alt=""/>  */}
                    </div>
                    <button className="navbar-toggler" style={{color: "white", border: "none"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-filter-square-fill" style={{width: '100%'}}></i>
                    </button>
                        <div className="collapse navbar-collapse position-relative " style={{justifyContent: 'end'}}   id="navbarNavDropdown">
                            <div id="menu" style={{width:'100%', display: 'flex'}} >
                                <ul className="navbar-nav d-flex" style={{justifyContent: 'center', alignItems:'center'}}  id="menu">
                                    <li className="nav-item ">
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#registropeticion" className="text-wrap text-center">Iniciar una peticion</button>
                                    </li>
                                    <li className="nav-item ">
                                        <Link to={'/empresa-postulaciones'} className="text-wrap text-center">Consultar postulaciones</Link>
                                    </li>
                                {/*ABRE MODAL DE REGSITRO DE MAQUINA*/} 
                                <div className="modal fade" id="registropeticion" tabIndex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-scrollable">
                                  <div className="modal-content" style={{border: 'Solid'}}>
                                    <div className="modal-header">
                                      <h1 className="modal-title fs-5"  id="exampleModalLabel">Registrar peticion</h1>
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
                                      <form onSubmit={sexo}>    
                                      
                                      <div className="mb-3">
                                          <label>Tipo de peticion</label>
                                          <select className="form-control" {...register("request_type", {required: true})} placeholder="Ingrese su tipo de peticion">
                                            <option>acabados</option>
                                            <option>hilatura</option>
                                            <option>tejeduria</option>
                                            <option>tintura</option>
                                          </select>
                                        </div>
                                          {
                                            errors.request_type && <p className='text-danger'>El tipo de peticion es obligatoria</p>
                                          }

                                          <div className="mb-3">
                                            <label htmlFor="" className="form-label">descripción</label>
                                            <textarea type="text" className="form-control" {...register("description", {required: true})} aria-describedby="emailHelp"placeholder="Ingrese una descripcion de la maquina" autoComplete="off"/>
                                          </div>        
                                          {
                                            errors.description && <p className='text-danger'>la descripcion es obligatoria</p>
                                          }    
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">cantidad</label>
                                            <input type="number" className="form-control" {...register("amount", {required: false})} aria-describedby="emailHelp"placeholder="Ingrese una cantidad" autoComplete="off"/>
                                          </div>   
                                          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <button type="submit"  className="btn btn-sm text-light" data-bs-dismiss="modal"aria-label="close"   style={{backgroundColor: '#C23373'}}>Registrar</button>
                                            <button className="btn btn-danger btn-sm "  data-bs-target="#primermodal" aria-label="close"  data-bs-toggle="modal"data-bs-dismiss="modal" >Volver</ button>
                                          </div>
                                      </form> 
                                    </div>
                                  </div>
                                </div>
                                </div> 
                                {/*CIERRA MODAL DE REGSITRO DE TALLER*/} 
                                    <li className="nav-item ">
                                        <Link to={'/empresa-peticiones'} className="text-wrap text-center">Consultar peticiones iniciadas</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="text-colapse text-center" to="#">Opciones de  usuario</Link> 
                                        <ul className="dropdown-menu">
                                        <li className="dropdown-item">
                                            <Link className="text-wrap text-center" to="/empresa-perfil">Informacion de la cuenta</Link>
                                        </li>
                                        <li className="dropdown-item"  onClick={logout}>
                                            <Link className="text-wrap text-center">Cerrar sesión</Link>
                                            </li> 
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
        </nav>
        {/*CIERRA NAVBAR TALLER*/}
    </>
  )
}

export default NavbarEmpresa