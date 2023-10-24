import NavbarMaquinas from '../components/NavbarMaquinas.jsx'

import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

const TallerMaquinas = () => {

const {  getMachine, DeleteMachine } = useAuth();



  return (
    <>
        <NavbarMaquinas/>
        <div className="justify-content-center align-items-center" style={{width: "100%", height: "auto"}}>
          <div className='container p-2 rounded-bottom-4 d-flex justify-content-evenly flex-wrap p-4  'style={{backgroundColor: '#5120d4', height: "auto"}}>
              { getMachine !== null ?
                      getMachine.map((machine )=> (
                      <div key={machine.id_machine} className="card mt-4" style={{width: "18rem"}}>
                          <div className="card-header">
                            {machine.id_machine}
                          </div>
                        <img src="/Images/flor.png" style={{width: "75%", height: '10rem'}} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{machine.machine_type}</h5>
                          <p className="card-text">{machine.mach_description}</p>
                          <div className='d-grid gap-2 d-md-flex justify-content-md-end '>
                            <button onClick={() => DeleteMachine(machine.id_machine) } type='button' className='btn btn-danger col text-light'>Eliminar</button>
                            <Link to={`/taller-maquinas/${machine.id_machine}`}>
                                <button type='button' data-bs-toggle="modal" className="btn text-light btn-sm"  data-bs-target="#actualizacionM" style={{backgroundColor: '#1db0c0', width: ''}}>actualizar</button>
                            </Link>
                          </div>
                        </div>          
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
