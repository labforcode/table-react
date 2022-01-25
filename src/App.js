import React from 'react';
import MaterialTable from 'material-table';
import { USER_GET } from '../src/services/users/user.service';
const App = () => {
  const [data, setData] = React.useState([]);
  const columns = [
    { title: 'id', field: 'id' },
    { title: 'nome', field: 'name' },
  ];

  /**
   * Função que busca os dados na api
   * @param {*} event
   */
  async function obterUsuarios(event) {
    event.preventDefault();
    const { uri, options } = USER_GET();
    const response = await fetch(uri, options);
    const json = await response.json();
    console.log(json);
    setData(json);
  }

  return (
    <div className="App">
      <div>
        <button onClick={obterUsuarios}>buscar</button>
      </div>
      <h1 align="center">Populando Tabela</h1>
      <MaterialTable title="Usuarios" data={data} columns={columns} />
    </div>
  );
};

export default App;
