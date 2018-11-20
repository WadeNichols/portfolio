import React, { Component } from 'react';

//my components
import Navbar from './Navbar'
import SwitchPage from './SwitchPage'
import './styles.css';


class App extends Component {
  render() {
    return (
      <div >
        <Navbar />
        <SwitchPage />
      </div>
    );
  }
}

export default App;
