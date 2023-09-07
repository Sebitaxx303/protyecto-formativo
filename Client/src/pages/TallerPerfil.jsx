import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const PerfilTaller = () => {
  const { logout } = useAuth();
  const { getUser } = useAuth();
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
                        <button className='btn btn-primary'>Editar perfil
                        </button>    
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