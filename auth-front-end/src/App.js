import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import routes from './routes';


class App extends Component {
  





  render() {
   
    return (
      <div className="App">
          {routes}
      </div>
    );
  }
}

export default App;
