
const AuthButton =(props)=>{
//    let {IsLoggedIn} = props.IsLoggedIn;
//    console.log("In Auth" + IsLoggedIn)
console.log(props.IsLoggedIn)
   if(props.IsLoggedIn)
    return <button> Logout </button>
    else 
    return <button> Login </button>

}
export default AuthButton;