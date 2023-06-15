import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

//app usuarios por si acaso
// import axios from 'axios'
// import {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom'

// const URI='http://localhost:8000/propietarios/'

// const Usuarios =()=>{
//     const[propietarios,setPropietario] = useState([])
//     useEffect(()=>{
//         getPropietarios()
//     },[])

//     //mostrar todos los usuarios 
//     const getPropietarios=async ()=>{
//         const res= await axios.get(URI)
//         setPropietario(res.data)


//     }

//     //eliminar un usuario
//     const deletePropietario=async (id)=>{
//         axios.delete(`${URI}${id}`)
//         getPropietarios()

//     }
//     return(
//         <div className="contenedor">
//           <div className="filas">
//             <div className="col">
//               <table className="table">
//                 <thead className="primero">
//                   <tr>
//                     <th>Propietario</th>
//                     <th>Nombre Mascota</th>
//                     <th>Tipo Mascota</th>
//                     <th>Sintomas</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {propietarios.map((propietario)=>(
//                     <tr Key={propietario.id}>
//                       <td>{propietario.mascota}</td>
//                       <td>{tipo}</td>
//                       <td>{Sintomas}</td>
//                       <td>
//                         <Link to={`./edit/${propietario.id}`} className="btn btn-info">Editar</Link>
//                         <button onclick={()=>deletePropietario(propietario.id)} className='btn btn-danger'>Borrar</button>
//                       </td>
//                     </tr>

//                   )) }
//                 </tbody>

//               </table>

//           </div>
//         </div>
// </div>

//     )
// }
// export default Usuarios
