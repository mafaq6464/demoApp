import React, { Component } from 'react';
import './App.css';
import Footer from "./components/footer";
import Header from "./components/header";
import Teacher from "./components/teacher";
import Dumy from "./components/Dumy";
import CountersWrap from "./components/counters-wrap";
import ReduxCounter from "./components/reduxCounter";

class App extends Component {

  render() {
    return (
      <div className="App">

        <Header />

        <div className="content" style={{ textAlign: "center", padding: "50px 0" }}>

            <ReduxCounter />
            
            <Teacher />

            <Dumy />

            <CountersWrap />

        </div>

        <Footer />

      </div>
    );
  }
}

export default App;