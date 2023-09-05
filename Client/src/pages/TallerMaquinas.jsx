
import { useState } from 'react'
import NavbarMaquinas from '../components/NavbarMaquinas.jsx'
import { GetMachineRequest } from '../api/auth.js'




const TallerMaquinas = () => {
  const [machine, setMachine] = useState([])

  const handleClick = async () => {
    const machine = GetMachineRequest()
    setMachine((await machine).data)
  }
  
  return (
    <>
        <NavbarMaquinas/>
        <div className="container d-flex justify-content-center align-items-center max-height-100%">
          <button type='button' onClick={handleClick}>muestra las maquinas</button>
                      
                      <table className="table mt-4 text-center">
                        <thead>
                          <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Tipo de maquina</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Foto</th>
                          </tr>
                        </thead>
                        {machine.map((machine,i) => (
                        <tbody key={i}>
                          <tr>
                            <th scope="row" >{machine.id_machine}</th>
                            <td>{machine.machine_type}</td>
                            <td>{machine.mach_description}</td>
                            <td>{machine.photo}</td>
                          </tr>
                        </tbody>
                          ))}
                      </table> 
 

            </div>

    </>
  )
}

export default TallerMaquinas