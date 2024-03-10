import { useState } from "react";
import Header from "./Header";

const Login = () =>{
   const[isSignInForm,setIsSignInForm] = useState(true);
   const toggleSignInForm = () =>{
     setIsSignInForm(!isSignInForm);
   }
    return (
         <div>
        <Header />
         <div className = "absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
            alt="image"/>
         </div>
        
         <form className ="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
         <h1 className ="font-bold text-3xl p-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            <input type = "text" placeholder = "Email Address" className = "p-4 my-4 w-full bg-gray-700"/>
            {!isSignInForm && (<input type = "text" placeholder = "Full Name" className = "p-4 my-4 w-full bg-gray-700"/>)}
            <input type = "text" placeholder = "Password" className = "p-4 my-4 w-full bg-gray-700"/>
            <button className = "p-4 my-4 bg-red-500 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="py-4 cursor-pointer " onClick={toggleSignInForm}>{isSignInForm ? "New To Netflix?Sign up Now" : "Already Registered?Sign In"}</p>
         </form>
        
         </div>
    
    )
}
export default Login