import '../style/App.scss';
import { useState } from 'react';
import adalabers from './data/components.json';
function App() {
  console.log(adalabers);
  const [data, setData] = useState(adalabers);
  const [newAdalaber, setNewAdalaber] = useState({ 
    name: '',
    counselor: '' ,
    speciality: '' 
  });

  const handleChangeInput = (ev) => {
    console.log(ev.target);
    setNewAdalaber({
      /*name: newAdalaber.name,
      counselor: newAdalaber.counselor,
      speciality: newAdalaber.speciality,
      */
      ...newAdalaber, [ev.target.name]: ev.target.value
    });
  };

  const handleClickNewAdalaber = (ev) => {
    /*const allAdalabersClone = [...allAdalabers];
      allAdalabersClone.push(newAdalaber);*/

    const allAdalabersClone = [...data, newAdalaber];
    setData(allAdalabersClone);
    setNewAdalaber ({
      name: '',
      counselor: '',
      speciality: '',
    });

  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  
  const htmlData = data.map((adalaber, index) => {
    return <tr key={index}>
              <td>{adalaber.name}</td>
              <td>{adalaber.counselor}</td>
              <td>{adalaber.speciality}</td>
            </tr>
  })


  return (
    <div className="App">
      <header>
        <h1 className="title">Adalabers</h1>
      </header>

      <main>
        <section>
          <table className="table">
 
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tutora</th>
                <th>Especialidad</th>
                </tr>
            </thead>

            <tbody>{htmlData}</tbody>
          </table>

        </section>
        <section>
          <h2>Añadir una adalaber</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="newName"> Nombre:
                <input type="text" name="name" id="newName" onChange={handleChangeInput} value={newAdalaber.name}/>
              </label>

              <label htmlFor="newCounselor"> Tutora:
              <input type="text" name="counselor" id="newCounselor" onChange={handleChangeInput} value={newAdalaber.counselor}/>
              </label>

              <label htmlFor="newSpeciality">
              <input type="text" name="speciality" id="newSpeciality" onChange={handleChangeInput} value={newAdalaber.speciality}/>
              </label>

              <label htmlFor="newSpeciality">
              <button onClick={handleClickNewAdalaber}>Añadir una nueva adalaber</button>
              </label>

            </form>

        </section>

      </main>
    </div>
      
    
  );
}

export default App;
