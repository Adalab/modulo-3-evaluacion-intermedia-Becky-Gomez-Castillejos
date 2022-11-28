import '../style/App.scss';
import { useState } from 'react';
import adalabers from './data/components.json';
function App() {
  console.log(adalabers);
  const [data, setData] = useState(adalabers);
  
  const htmlData = data.map((adalaber) => {
    return <tr>
              <td>{adalaber.name}</td>
              <td>{adalaber.counselor}</td>
              <td>{adalaber.speciality}</td>
            </tr>
  })


  return (
    <div className="App">
    <h1 className="title">Adalabers</h1>
    <table className="table">
 
      <thead><tr>
      <th>Nombre</th>
      <th>Tutora</th>
      <th>Especialidad</th>
      </tr></thead>

      <tbody>{htmlData}</tbody>
    </table>





    <form action="" className="formulario">
      <label htmlFor="name">El nombre:</label>
      <input className="input" type="text" id="name" placeholder="Holis" max-length="" />
    </form>
    </div>
  );
}

export default App;
