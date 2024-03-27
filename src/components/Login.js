import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validdata";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    // checkValidData(email,password);
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    //  console.log(message);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(name.current.value);
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVATAR,

          }).then(() => {
            if (user) {

              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

            }

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
    else {
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
         // const user = userCredential.user;


          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });

    }
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);

  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL}
          alt="image" />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl p-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700" />
        {!isSignInForm && (<input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700" />)}
        <input ref={password} type="text" placeholder="Password" className="p-4 my-4 w-full bg-gray-700" />

        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button className="p-4 my-4 bg-red-500 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer " onClick={toggleSignInForm}>{isSignInForm ? "New To Netflix?Sign up Now" : "Already Registered?Sign In"}</p>
      </form>

    </div>

  )
}
export default Login