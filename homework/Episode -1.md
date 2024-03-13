we make a project on the the netflix gpt 
-AUTHENTICATION 
  --FIRBASE 
-FORM HANDLING

-in this project we will use the CHATGPT API
- food ordering app we make to use scretch now we will use create react in this all module and bundler and all thing will come in oonly one command (npx create-react-app netflix-gpt) this will use WEBPACK at the place of parcel 
there are a lot of command like start and the build so we dont need to set it we use the command NPM START 
we delete the logo and the testcase in the src and we will clear the app.css also bacause we use the tailwind delete header also write something different there and i deleted the index.css also because we will use tailwind in this project
now i will move on the tailwind official website and i go to the framework guide and i use the (create react app) and follow its command  
firstly we install tailwind in the this afterthat according to the tailwind css i will update path of it i write in the content i used this path [ "./src/**/*.{js,jsx,ts,tsx}"] in the content ,AFTERTHAT i will paste command in the index.css 

--------------------PROJECT STEPS----------------------
- LOGIN/SIGNUP
  -- SIGN IN/SIGN UP FORM 
  --REDIRECT TO  BROWSE PAGE
- BROWSE(AFTER AUTHENTICATION)
- HEADER 
   -- LOGO
- MAIN MOVIE
  --TRAILER IN BACKGROUND
  -- TITLE AND DISCRIPTION 
  -- MOVIES SUGGESTIONS
        MOVIES LIST*N
- NETFLIX GPT
    -- SEARCH BAR 
    -- MOVIE SUGGESTIONS

    - What i create 
     -create react app
     -configured tailwind css
     -header
     -routing of app
     -login form 
     -signin form 
     -form validation 
     -useRef Hook
    -firebase setup 
    -create signup user account 
    -implement signin in the user API
    -created redux store with userslice 


- NEXT COMMIT 
 - now we make 2 folder component and utils  
 in the component m i create Login.js in the and we use there a (rafce) it will give us the complete functional component in the login.js and now we make Heder.js, Browse.js and the Body.js and we keep header and browse in the body 
 - now we will install router-dom with the commnad (npm i -D react-router-dom) and after instaling it i will import (creteBrowserRouter) from the react-router-dom and make the path from it and 
 (const appRouter = createBrowserRouter([{path :"/",element: <Header />},
        {path :"/browse",element: <Browse />},]) so now we need to provide routing so we import 
        (import { RouterProvider } from "react-router-dom";) and use it in the JSX
        (<div> <RouterProvider router={appRouter} /></div>) iss trah hum routerprovider ka use karte h 
    ab hum isko check karte h ki ye shi chal rha h ke nhi and now we will import header in the login page and we use netflix logo in the header as a image and we will use full screen image in the login page now i set  size and width of both  image
    and now we make a sign up box in this page  ,and now we will make input type text box and button in the mid using tailwind  and now we mwke a button or link if user is new on this netflix website   (<p className="py-4 " onClick={toggleSignInForm}>New To Netflix? Sign Up Now</p>) jaise hi m iss line par click karuga then uper wala sign in wali heading change ho jyegi or toggleSignInForm call ho jayega isse phle uper aak state variable banaya hua h ,jisme ki isSignIn ko true batya h jase togglesigninfrom ko call laga wo issigninform false ho gya ab yedi ye true h to heading me bhi sign in hoga nhi to sign up hoga jo heading k liye kiya wosame hi hum niche sign in button k liye karenge ({isSignInForm ? "Sign In" : "Sign Up"}) and niche diye gye paragraph me hum ({isSignInForm ? "New To Netflix?Sign up Now" : "Already Registered?Sign In"}) and yedi koi user phle se registered hi h to uske liye m kuch nayi functionalities add karuga 
    ------IF YOU USE LONG FORM IN THE REACT THEN USE FORMIK LIBRARY
     

     -- FORM VALIDATION
     - useref hook 
     sabse phle yedi hum sign in par click karte h to handleButtonClick function call hota h or yeh form k data ko validate karte h {regex} k through ,iske liye hum util m aak file validate.js banate h or wha hum valid email or password ko check karte h regex k through , jaise hi m handlebuttonclick me (checkValidData(email,password)) to ye error dega 
     jaise hi m isme name or password bharta hu to yeh data m kha se get karuga ?
       ya to statevariable use kar lo or ya useRef hook or jaise hi hum sign in k button par click karenge to click karte hi means i want to know about what is in the input box ,how will i found it? i will need a reference to this input box this reference created by useref hook  
 const email = useRef(null);
   const password  = useRef(null); and we use ref = {email} in the input box taking reference 
   and m ab (handleButtonClick) me email or password ko console karata hu or iska mtlb jab m button ko click karu then email or passoword console hone chiye but aisa nhi hota h form sidhha submit ho jata h so iske liye hum  form me onSubmit ka use karenge (onSubmit={(e) =>e.preventDefault()} )  now it will give us the value of the email and password ab hum email.current.value and password.current.value ko console karege to hum email or password mil jayege or ab hum iska validation check kara lenge or console kara lenge 
   and now error ko page par dikhana h iske liye hum JSX likhege or isko set karne k liye m state variable ka use karuga 
   (const[errorMessage,setErrorMessage] = useState(null);) ab hum message jo hume validdata chala kar mila ko setErrorMessage me  store kara denge now make name validation of name as well as the email or the password so firstly se condition in the validdata and use it by using useRef 


 now we will move on the building authentication so we will need backend ,for backend i will use firebase 
   -----------------FIREBASE     PROJECT ID - netflixgpt-c40db
   firbase.google.com > getstarted > addproject > project name > continue after its submission when it show project is ready then > web and put you project name and it will give us a command and the hame aak js file milegi jisko humne firebase.js m rakh liya 
   install firebase cli (npm install -g firebase-tools) iske baad firebase login karenge 
   -------USER SIGN-IN AND SIGN - UP  JO BHI SIGN UP KARENGE WO HUME FIREBASE M DIKHEGA 
   ab mujhe for the new and old user sign in /sign up karenge to hum firebase me jakar wha se 
   (import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";) in the firebase.js we will use only getAuth and  
  export const auth = getAuth(); in the firebase or jaise hi hum sign up karenge to yedi password name shi h to user console ho jayega console bar me  hum "signInWithEmailAndPassword" ko firebase se utha kar iska use sign in k liye karte h isme hum user ko console kara k dekh lete h if wo user exist karta h to uski information console bar m dikh jayegi otherwise hum error dikhegi or yehi hum  "createUserWithEmailAndPassword" ka use user create karne k liye karte h iske liye humne auth ko firebase m likha h takki hum har baar na likhe sirf isse import karva le or (signInWithEmailAndPassword,createUserWithEmailAndPassword) ko siddha firebase se hi import karvate h 


  -- NOW WE WILL STORE USER INFORMATION IN THE REDUX STORE :
  so first of all we will set up the redux store we need to install two libraries redux-toolkit and react-redux so we will give command to terminal for the first one is "npm i -D @reduxjs/toolkit" and for the second one "npm i react-redux"
  now we will make a file for the store  in the utils "appStore.js"  and now we will create slice which name is now we will import userReducer in the userStore from the userSlice 
  now i will provide store to the body in the App.js thorugh provider and now i wrap my body in the provider like this {<Provider store={appStore}><Body /></Provider>}   
  now we will come on the login.js flie whenever i signIn and signUp then data will dispatch and this thing happen again and again ,prevent this repeatation of the dispatching of data we have a utility which is given to us by the firebase is "onAuthStateChanged" in the firebase docs there are a manage users and we can see the example of the 
  import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
this API is call whenever user "signin,signup,signout,authenticationstatechange" this is kind an eventListener 
i cannot call it again and again i only call it once so i use useEffect in the body.js and there i will extract the value of uid and email and displayname from the user,how to dispatch an action through the useDispatch ,always use your hook on the top of your component and i put ( dispatch(addUser({uid:uid,email:email,displayName:displayName}));) in my store ,and we will use
 dispatch(removeUser()); for signout and when i signup or the signin the page should be redirected so we use usenavigate hook for it  ,if user sign in or sign out then page should redirect to the /browse in the login.js  now when we sign in or sign up whenever we click on the red button then we will reach on the browse 
 now we will add header to the browse page 
 now we will add sign out button to the header
 and now we will move towards the docs for the signout functionality
  jaise hi signout button par click karenge to yeh call laga dega handleSignOut function  ko wha par hum sign out ki property ko dal denge,
  now we will work on the update user profile when he sign up on this app so firstly we will move towards the manage users docs and we use update user's profile
  { updateProfile(auth.currentUser, {
  displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});

  
  }
  and we will use the useRef for the name and use it in the display name and the photoURL after the updation of the profile we will navigate it "/browse" or if we get and error then we will update the errorMessage through the error.message ,and now we will move towards the onAuthStateChanged and here we will get data like uid ,email,photoURL and displayName  from the user afterthat we dispatch it in the store 


  how i use photoURL?
  i will use my useSelector bacause we have data of image in the slice so we will use useSelector
  
  everything is done but the logo and the sign out button is shown on the login page so what we do to remove it
