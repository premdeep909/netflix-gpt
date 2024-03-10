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
     -login form 
     -signin form 

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