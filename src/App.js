import React, { Component } from 'react';

//my components
import Navbar from './Navbar'
import Footer from './Footer'
import SwitchPage from './SwitchPage'
import Header from './Header'
import './styles.css';


class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <Navbar />
        <SwitchPage />
        <Footer />
      </div>
    );
  }
}

export default App;
