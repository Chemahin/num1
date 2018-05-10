import React, { Component } from 'react';

import './App.css';
import FormAuthoriz from './FormAuthoriz.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <FormAuthoriz /> 
            </div>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
