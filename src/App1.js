import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App1() {
 
 const [IsLoggedIn, setIsLoggedIn]= useState(true);  
  
 console.log(IsLoggedIn)
 
 let AuthButton;
 if(IsLoggedIn)
     AuthButton = <button> Logout</button>
 else 
    AuthButton = <button> Login</button>
 
  return (
    <div className="App">
 <h1>

     This is a Demo showing several ways to implemet Conditional Rendering in React
  </h1>
  {AuthButton}
    </div>
  );
}

export default App1;
