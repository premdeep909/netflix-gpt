import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validdata";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {updateProfile } from "firebase/auth";

const Login = () =>{
   const[isSignInForm,setIsSignInForm] = useState(true);
   const[errorMessage,setErrorMessage] = useState(null);
   const email = useRef(null);
   const name = useRef(null);
   const password  = useRef(null);
   const navigate = useNavigate();

   const handleButtonClick = () =>{
    // checkValidData(email,password);
   // console.log(email.current.value);
   // console.log(password.current.value);
     const message = checkValidData(email.current.value,password.current.value);
  //  console.log(message);
   setErrorMessage(message);
   if(message) return;

   if(!isSignInForm){
      //sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(name.current.value);
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://imgur.com/aWSHr49"
      
    }).then(() => {
      navigate("/browse");
    }).catch((error) => { 
     setErrorMessage(error.message);
    });
    console.log(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });

   }
   else{
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-" + errorMessage);
  });

   }
   }
   
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
        
         <form onSubmit={(e) =>e.preventDefault()} className ="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
         <h1 className ="font-bold text-3xl p-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            <input ref={email} type = "text" placeholder = "Email Address" className = "p-4 my-4 w-full bg-gray-700"/>
            {!isSignInForm && (<input ref={name} type = "text" placeholder = "Full Name" className = "p-4 my-4 w-full bg-gray-700"/>)}
            <input ref ={password} type = "text" placeholder = "Password" className = "p-4 my-4 w-full bg-gray-700" />
           
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button className = "p-4 my-4 bg-red-500 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="py-4 cursor-pointer " onClick={toggleSignInForm}>{isSignInForm ? "New To Netflix?Sign up Now" : "Already Registered?Sign In"}</p>
         </form>
        
         </div>
    
    )
}
export default Login