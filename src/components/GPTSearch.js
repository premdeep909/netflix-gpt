import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";
const GPTSearch = ()=>{
   return (
<div>
<div className="absolute -z-10">
        <img src= {BG_URL}
          alt="image" />
      </div>

   <GptSearchBar />
   <GptMovieSuggestion />
</div>
   )
}
export default GPTSearch;