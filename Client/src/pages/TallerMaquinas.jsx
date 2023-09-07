
import NavbarMaquinas from '../components/NavbarMaquinas.jsx'
import { useAuth } from '../context/AuthContext.jsx'

const TallerMaquinas = () => {
const { getMachine } = useAuth();
  return (
    <>
        <NavbarMaquinas/>
        <div className="justify-content-center align-items-center" style={{width: "100%", height: "auto"}}>
          <div className='container p-2 rounded-bottom-4  'style={{backgroundColor: '#5120d4'}}>
                      {getMachine != null ?
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
                              <td style={{ backgroundColor: '#12245f'}} className='text-light offset-1 col-6'><button type='button' className='btn btn-danger col text-light'>Eliminar</button></td>
                              <td style={{ backgroundColor: '#12245f'}} className='text-light offset-1 col-6'><button type='button' className='btn btn-info col text-light'>Actualizar</button></td>
                              </div>
                            </tr>
                          </tbody>
                      </table> 
                      </div>
                          )):
                          <div className='rounded m-4 p-3' style={{border: "2px solid #79155B"}}>
                            <h1>nada my rey</h1>
                            </div>
                        }
                </div>
            </div>

    </>
  )
}
export default TallerMaquinas
