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
    -implement sign out 
    -update profile 
    - Bug Fix :sign up userdisplayname and profile picture update 
    -Bug Fix :if the user is not logged in redirect browse to login page vice versa 
    -unsubscribe onauthstatechanged callback
    <!-- -fetch from tmdb movie 
     -1. adding constant files to the project 
    -2. import api from the TMDB for background trailer 
    - 3 adding movies data to the store --> 
    -Add hardcoded values to the constants value 
    - Register TMDB api & create an app & get access tokan 
    - Get data from TMDB now playing movies list api 
    - Create custom hook for now playing movie 
    - create movieSlice
    - Update store with movies data 
    - Planing for mainContainer & secondaryContainer
    - Fetch data for trailer video 
    - Update store with trailer video data 
    - Embedded the youtube video and make it autoplay and mute 
    - Tailwind classes to make it look awesome  
    - build secondary component 
    - build movie list 
    - build movie card
    - TMDB image CDN Url 
    - made the browse page amazing with tailwind css 
    - usePopularMovie custom hook
    - add GPT search page
    - Gpt search bar 
    - multi-language feature in our app
    - 

    

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
  
  everything is done but the logo and the sign out button is shown on the login page so what we do to remove it?




----------------------------------------------------- NEXT EPISODE ------------------------------------------------------------
NOW WE WILL TMDB FOR THE API FOR THE MOVIE TRAILER ON THE BROWSE PAGE 
I USE IT BEACAUSE IT HAS PROPER DOCUMENTATION OF LATEST MOVIES 
there are a bug if i use localhost:3000/browse  then we reach at the browse page but actually we have to move browse page after sign in or sign up 
now we will fix this bug 
we will go to the body.js and usenavigate ka use karke jaise hi hume user mila hua to  sara data store kara denge or page ko navigate kar denge for yedi or jaise hi signout karte h to yeh signout karte h to user ka data remove ho jata h or isko redirect kar diya jata h login page m ,but it will give us error (useNavigate() may be used only in the context of a <Router> component.) so we will copy this useEffect variable and paste  in in the header and i will also remove navigate from the login page, whenever sign in sign out is called i always rely on this new change ,
 
 ------UNSUBSCRIBING ONAUTHSTATCHANGED 
useEffect will called once when my component loads but header will load multiple times ,onauthchanged is like a event listener ,whenever auth status changed when user login and logout this(onauthstatuschanged(OASC)) keeps track o it ,if my component unmounts then i unsubscribe this(OASC)
WHERE WE DO CLEANING INSIDE OUR USEEFFECT ?
i will have to return a function of this component ,when i call the unsubscribe then iT will remove OASC from our browser  
when my header component unload(unmount) then unsubscribe this function unsubcibe this event .it is hygiene practice 


------------------1. adding constant files to the project 
when we see any string photo url type then i always use constant.js file 

-----------------2. import api from the TMDB for background trailer
we visit the tmdb and get popular movies api and we put API_OPTION and keep it in the constants.js and import api in the 
in the browse.js 
  const getNowPlayingMovies = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          API_OPTIONS
        );
        const json = await data.json();
        console.log(json);
    
    }   
    and we keep getNowPlayingMovies this in the useEffect because we want to fetch only one time and after that check the console and i see in the console all the movies console 2 times due to the strict mode  if we go in the index.js we will see there ,and at the local host it console two times but at the build production it is not happen twice 
    why it is happen twice ? 
    react do extra rendering to check consistency between your calls 

    ----------------------3.adding movies data to the store
    we create movie slice ,and put the all data in the movie slice after making all the movieSlice i will store its data to the appStore.js ,i will store json.result which is data of the background trailer i will add it in the movieSlice so i will dispatch it so i will import addnowplayingmovies from the  movieSlice and pass the json.results in this addnowplayingmovies and dispatch it 
        -- create own custom hook
        code of browse is looking so ugly so make a seperate folder for it and its name is hooks and keep fetch movies API and 
        the dispatch to store and the useEffect will keep in it and we create a hook in the browse page 

        -- start building browse page
       - MAIN CONTAINER 
         -- VIDEO BACKGROUND
         -- VIDEO TITLE 
      - SECONDARY CONTAINER 
       -- MOVIES LIST *N
       -- CARDS*N
make js file in the components main container 
and SecondaryContainer also 
now we will need data in the maincontainer so we will get data through the useSelctor 
(const movies = useSelector(store => store.movies?.nowPlayingMovies);)
now we need two things in the maincontainer 1.VideoBackground 2. VideoTitle 
 and now we will overlap VideoTitle on the VideoBackground 
 mere ko sbhi movies nhi chalni h aak hi screen par mere ko keval aak hi movie chalni h so m kya karta hu first movie hi le leta hu (const mainMovie = movies[0];console.log(mainMovie);)  so i get error in this 
 (Cannot read properties of null (reading '0')) and
  why this error come in this ?
  when i see in the store nowplayingmovies is null and i am trying to access the 0th index of the null ,if movies is null then i will return from it ,and it is called early return 
        it means if there is no movies then return and if there is movie then the first movie will be on the screen 
        - now it is time to build the VideoTitle so i will extract few detail form this mainmovie 1. original_title
2.overview 
now i pass both of them in the maincontainer video title m props k roop m daal denge 

      - Building Video Background 
       - now i will go on the tmdb and in the movies section and go to the  video section and there i will copy id from the console and paste it in the pathparam there and get api response  
     m kya karta hu sabse phle api se id le leta hu or usko m paste karta hu  movie k video section me or wha or jo api muje api milti h m uska use videobackground me karta hu 
    or yeh check karta hu konsi type trailer h so iske liye hum 
    ( const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData[0];// iska use isliye kiya h kai  baar aak se jyada trailer hota  h
        console.log(trailer);)
        or yedi filterdata ki length 0 nhi h to filterDatap[0] ka use karte h nhi to json.results[0] use karte h  
        or jo bhi console hota h usme elemental key hoti h youtube ki jisko paste karke hum isko youtube par dekh sakte h 
        how to get embed code of the youtube video when we share we get it put as JSX 
        # we get error after that(console.js:213 Warning: Invalid DOM property `frameborder`. Did you mean `frameBorder`?) because it allows the camel case in the JSX;
        now i remove key from the embeded code and put there trailer.key and put it in the {} but here now one problem trailer is not defined ,we have to solve two method to solve it one is the state variable (
          const[trailerId,setTrailerId] = useState(null);)
          but if i use redux store then i will not need to use the state variable so i put my trailer in my store 
          - how i put my trailer in the store ?
            we will add trailer in the movieSlice so i go to movie slice and there i declare trailerVideo : null and after that make a reducer there 
            (addTrailerVideo : (state,action) =>{
            state.trailerVideo = action.payload;
        })
after that i export addTrailerVideo afterthat i use useDispatch and dispatch the trailer in the in the movieSlice afterthat i use useSelector to read


# create custom hook for the trailer video 
we create a js file in the hooks is useMovieTrailer i will use there api call and the useEffect also and now i pass movie id in the VideoBackground.js in the useMovieTrailer(movieId);and this will go in the useMovieTrailer as a props and we use it in the API 
{ const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_OPTIONS);}
# building video background 
the all things of tailwind 
we will give background to the videoTitle to the title so we will give background gredient to right
we will use this property( "?&autoplay=1&mute=1") to mute the video and the autoplay




## CREATING MOVIES SUGGESTIONS LIST 
what we need to do firstly we will do planning here 
  MovieList - now playing
    MovieCard*n
  MovieList - popular
  MovieList - tranding
  MovieList - horror 
   now make a seperate js file {MovieList.js} and {MovieCard.js} also and in the Secondary container we will pass title in the MovieList and 
   - data of movies 
   how we get data of movies?
   we get this data from store through the useSelector
   now i use the props(title,movies) in the moviesList and when we do console.log(movies) of  then we will get list of the movies in the console 
   now we will use poster_path and we will get cdn url for the image 
   (https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg) so we have the poster path for the every movie we will use the (https://image.tmdb.org/t/p/w500/+"poster_path") i put this url in the constents.js and this url is use in the MovieCard.js in the image along with the posterpath (where we will get posterpath so we pass props in the MovieCard which is get by us from the MovieList(<MovieCard posterpath={movies[0].poster_path} />)) we have multiple movies in this so i will use map for it ,movies k upar map laga diya or har movie  ko aisa card (<MovieCard posterpath={movies[0].poster_path} />) chiye we will use the key also (  {movies.map((movie) =>(<MovieCard posterpath={movie.poster_path} />))})


  # how to add popular movie api in this project 
  firstly we will make a file usePopularMovie.js and make there a functional component usePopularMovies.js and import api from the TMDB and use the useEffect and dispatch the action in the store after that we will make reducer in the movieSlice.js now i go to the Browse.js and i use the usePopularMovies() there.and update the SecondaryContainer.js 

  # now we eill talk about the GPT
  we will add the button in the Header.js 
  i will make the GPTSearch.js functional component 
  and i add its in the Browse.js as well as the header and the MainContainer and the SecondaryContainer 
  we need to toggle functionality in the Header.js and make function (handleGptSearchClick) function 
  lets create the seperate Slice for store this data in the redux store  GPTSlice in the utils 
  and now we will add this slice in the redux store(gpt: gptReducer,) check it in the store (showGptSearch(pin):false) so it is store in the appStore successfully 
  now we toggle this action ,how we will toggle it? 
  we will dispatch an action(  dispatch(toggleGptSearchView());) from the header in the handleGptSearchClick function 
  and ab jaise hi m button (GPT search) button ko dabauga to i will get true in the redux store (showGptSearch(pin):true);
  ab jaise hi showGptSearch true dikhaye to iss button ko dikhna h nhi to MainContainer and secondaryContainer ko dikhana h so iske liye m Browse m jaker useSelector ka use karke m redux store ka true false ko padd lunga 
  ( const showGptSearch = useSelector(store => store.gpt.showGptSearch);)
  and now we will make a functionality if we click omn the GPT search button if it is true then we will get the GPTSearch page and if it is false then i will get MainContainer and the SecondaryContainer 
   (  showGptSearch ? ( <GPTSearch />) : (<><MainContainer /> <SecondaryContainer /></>))
   and jaise hi yeh GPTSearch page khulega then we need two things one is the gpt search bar and the second is the GptmovieSuggestion and i use both of these in the GPTSearch 
   and in the SearchBar.js me hum JSX banyege or GPTSearch page par aak background image lagayege 

   # we want to make a feature that would provide the facility of providing the searching movies in the multiple language 
   so humne sabse phle placeholder or search ko language ke according set karne k liye humne humne (languageConstants.js) name ki aak file banai search ki jagah humne ({lang.hindi.search}) ka use kiya h and placeholder ki jagah 
   ({lang.hindi.gptSearchPlaceHolder}) ka use karte h , hindi will be dynamic it will be change 
   we will use this information in the redux store 
   now we will  make a dropdown button in the Header.js 
   (export const SUPPORTED_LANGUAGE = 
   [{identifier: "en",name : "English"},{identifier: "hindi",name : "Hindi"},{identifier: "spanish",name : "Spanish"}]) now we will use map in the header at the place of spearate language ,
   i will create a seperate Slice for this to store it in the redux store so we will create configSlice.js 
   now i will store it in the redux store and i successfully store it in the redux store(lang(pin):"en")
   jha mene ye language ka button banaya h wha m onChange ka use karke  aak function {handleLanguageChange} ko call karuga aur m i want that what option changed it trigger event and iske baad hum isko event ki value ko console kara lenge or i will use the useRef to get the value of the selectbox 
   now i will change the language it,it show in the console 
   now we will dispatch this action in the changeLanguage in the configSlice so now our language will be store in redux store jaise hi hum ko change karenge to yeh isme store ho jayegi 

   # now i want to change laguage of the placeholder and the search button whenever i change it from the button 
   now we will use the stored value in the GptSearchBar.js the make a variable (langKey) there and we use it in the placeholder and the search button lang[langKey] to make it dynamic and this button do work successfully 

   # we have  a problem when we move on the homepage from the gptsearch page then we will then the laguage dropdown show there so we will remove it.
   sabse phle hum showGptSearch ka variable banaya and  useSelector ka use karke 
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    if it is true then we then only the dropdown button will show
     {showGptSearch && (<select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGE.map(lang =>  <option key = {lang.identifier} value= {lang.identifier}>{lang.name}</option>)}
         
        </select>)}

  ab mereko gptSearch wale page par gptSearch wale page ko homepage name dena h
  yedi mera showGptSearch is true then i will use the homepage otherwise i will use the gptsearch 