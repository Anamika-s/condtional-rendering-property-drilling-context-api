
const AuthButton1 =(props)=>{
     console.log(props.IsLoggedIn)
    switch(props.IsLoggedIn)
    {
    case true:
        return <button> Logout </button>;
    case false :
        return <button> Login </button>
    default:
         return null;    
    }
    
    }
export default AuthButton1;