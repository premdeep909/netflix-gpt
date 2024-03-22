import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
const useMovieTrailer = (movieId) =>{
    const Dispatch = useDispatch();
    //fetch trailer video && updating the store with trailer video 
    const getMoviesVideos = async (movieId) =>{
       // console.log(movieId);
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTIONS);
       
        const json = await data.json();
        //console.log(json);
        //console.log(json.results);
        const filterData =  json.results.filter((video) => video.type === "Trailer"); 
        const trailer = filterData.length ? filterData[0] : json.results[0];
       // console.log(trailer);
       // setTrailerId(trailer.key);
        Dispatch(addTrailerVideo(trailer));

    }
   useEffect(() =>{
        getMoviesVideos(movieId);

   },[]);
}
export default useMovieTrailer;