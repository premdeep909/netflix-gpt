import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
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
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from from-black z-10 flex justify-between">
      <img className="w-44"
        src={LOGO} alt="logo" />
      {user && <div className="flex">
        <img className="w-16" src={user?.photoURL} alt="photo" />
        <button onClick={handleSignOut} className=" font-bold text-red-700 p-2">(Sign Out)</button>
      </div>}
    </div>
  )
}
export default Header;