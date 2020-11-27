import React, { Component } from 'react';
import { Table} from 'reactstrap';
import logo from './pic/logotype.svg'

import './App.css'
import NewsList from './component/NewsList';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Table className="Navbar">
          <tbody>
            <tr>
              <td>
                <img src={logo} width="20" />
              </td>
              <td>
                New Today!!
              </td>
            </tr>
          </tbody>
        </Table>
        <NewsList />

      </div>
    );
  }

}

export default App;
