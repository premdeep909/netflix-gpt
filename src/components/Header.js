import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.

    });

  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();

  }, []);
  const handleGptSearchClick = () =>{
    //toggle GPT search 
    dispatch(toggleGptSearchView());
  }
  const handleLanguageChange  = (e) =>{
     //console.log(e.target.value);
     dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from from-black z-10 flex justify-between">
      <img className="w-44"
        src={LOGO} alt="logo" />
      {user && <div className="flex">
       {showGptSearch && (<select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGE.map(lang =>  <option key = {lang.identifier} value= {lang.identifier}>{lang.name}</option>)}
         
        </select>)}
      <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}> {showGptSearch ? "HomePage" : "Gptsearch"}</button>
        <img className="w-16" src={user?.photoURL} alt="photo" />
    
        <button onClick={handleSignOut} className=" font-bold text-red-700 p-2">(Sign Out)</button>
      </div>}
    </div>
  )
}
export default Header;