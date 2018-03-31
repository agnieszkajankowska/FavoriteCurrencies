import React, { Component } from 'react';
import './App.css';
import CurrenciesList from '../CurrenciesList/CurrenciesList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrenciesList />
      </div>
    );
  }
}

export default App;
