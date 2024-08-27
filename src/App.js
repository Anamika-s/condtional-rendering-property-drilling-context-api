import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import AuthButton from './components/AuthButton';
import AuthButton1 from './components/AuthButton1';
function App() {
 
 const [IsLoggedIn, setIsLoggedIn]= useState(false);  
  
 console.log(IsLoggedIn)
//  const renderAuthButton =()=>
//  {
//   console.log("IsLoggedIn" + IsLoggedIn)
//     if(IsLoggedIn)
//       return <button> Logout </button>
//       else 
//       return <button> Login </button>
//  }

  return (
    <div className="App">
 <h1>
  IsLoggedIn {IsLoggedIn}
     This is a Demo showing several ways to implemet Conditional Rendering in React
  </h1>
  {/* <button> Login </button>
  <button> Logout </button> */}
  {/* {renderAuthButton()} */}
  {/* <AuthButton IsLoggedIn={IsLoggedIn}/> */}
  <AuthButton1 IsLoggedIn={IsLoggedIn}/>
   </div>
  );
}

export default App;
