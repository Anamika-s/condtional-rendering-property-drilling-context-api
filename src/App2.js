import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App2() {
 
 const [IsLoggedIn, setIsLoggedIn]= useState(false);  
  
 console.log(IsLoggedIn)
  
  return (
    <div className="App">
 <h1>

     This is a Demo showing several ways to implemet Conditional Rendering in React
  </h1>
   {IsLoggedIn ? <button> Logout </button> : <button> Login </button>}
     </div>
  );
}

export default App2;
