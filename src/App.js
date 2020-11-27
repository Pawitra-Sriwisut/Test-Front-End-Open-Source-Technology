import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import logo from './pic/logotype.svg'
import axios from 'axios'

import './App.css'
import NewsList from './component/NewsList';

class App extends Component {

  state = {
    news: []
  }

  componentWillUnmount() {
    axios.get('https://agile-cliffs-83142.herokuapp.com/api/news').then(response => {
      this.setState({
        news: response.data
      })
    })
  }

  render() {
    let news = this.state.news.map((newss) => {
      return (
        <h1>{newss.title}</h1>
      )
    })
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
