import React, { Component } from 'react';
import './App.css';
import Login from './Login';
//import Main from './Main';
import OurHistory from './OurHistory';
//import NavBar from './Home';
import Contacto from './Contacto';

class App extends Component {
  render() {
    return (
      <div className="App">
     {/* <NavBar/>  */}
     {/*<Main/> */}
    {/*<OurHistory/> */} 
     <Contacto/> 
  {/*<Login/> */}
      </div>
    );
  }
}

export default App;
