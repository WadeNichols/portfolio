import React, { Component } from 'react';

//my components
import Footer from "./Footer"
import SwitchPage from "./SwitchPage"
import Header from "./Header"
import Navbar from "./Navbar"
import './styles.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <SwitchPage className="container" />
        <Footer />
      </div>
    );
  }
}

export default App;
