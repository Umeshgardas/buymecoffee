import React from 'react';
import Navbar from './components/layout/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import Mainheading from './components/layout/Mainheading';
import Creaters from './components/layout/Creaters';
import Donations from './components/layout/Donations';
// import Navs from './components/layout/Navs';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainheading/>
      <Creaters/>
      <Donations/>
      {/* <Navs/> */}
    </div>
  );
}

export default App;
