import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import { useNavigate, Link } from "react-router-dom"
import { useEffect } from "react"


const Navbarinic = () =>{

      const { register, handleSubmit, formState:{errors} } = useForm()
      const {signin,  isAuthenticathed, errors: SigninErrors } = useAuth();
      const navigate = useNavigate();
  
      useEffect(()=>{
        if(isAuthenticathed) navigate('/taller-inicio');
      },[isAuthenticathed, navigate])

      const onSubmitedLog = handleSubmit( async (data) => {
        signin(data);
      })

    return(
        <>
            {/*ABRE HEADER*/} 
            <header className="header container-fluid" style={{backgroundColor: "#12245f"}}>

                    {/*ABRE NAV*/} 
                    <nav className="nav row">
                      
                      {/*ABRE DIV DE LOGO Y NOMBRE DE LA EMPRESA */}
                      <div className="col-6 row"> 
                              {/* <div className="col-3 p-3 ">
                                  <img src="./images/logo2.jpeg" alt="icon" style={{borderRadius: '100%', width: '65%', height: '8rem'}}/>
                              </div> */}
                              <div className="col-6  align-middle "style={{color: 'white'}}>
                                  <h1 className="mt-5">softex</h1>
                              </div>
                      </div>
                      {/*CIERRA DIV DE LOGO Y NOMBRE DE LA EMPRESA */}

                        {/*ABRE DIV DE INICIO DE SESIÓN*/} 
                        <div className="col-6" id="contenido-nav"> 
                            <button type="button" data-bs-toggle="modal" data-bs-target="#primermodal" style = {{borderRadius: '12px', padding: '5px', border: '1px solid #155d8d'}}>Inicio de Sesion</button>{/*BOTON PARA ABRIR VENTANA MODAL*/} 
                        </div>
                        {/*CIERRA DIV DE INICIO DE SESIÓN*/} 
                            {/*ABRE MODAL DE LOGIN*/} 
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
                            {/*CIERRA MODAL DE LOGIN*/} 
                    </nav>
                    {/*CIERRA NAV*/} 

            </header>
            {/*CIERRA HEADER*/} 
        </>
    )
}
export default Navbarinic