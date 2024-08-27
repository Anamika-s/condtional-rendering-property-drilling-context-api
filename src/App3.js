import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App3() {
 
 const [IsLoggedIn, setIsLoggedIn]= useState(true);  
  
 console.log(IsLoggedIn)
  
  return (
    <div className="App">
 <h1>

     This is a Demo showing several ways to implemet Conditional Rendering in React
  </h1>
   {IsLoggedIn && <button> Logout </button>}
   {!IsLoggedIn && <button> Login </button>}
 
     </div>
  );
}

export default App3;
