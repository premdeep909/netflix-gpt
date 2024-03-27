import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () =>{
    const langKey = useSelector((store) => store.config.lang);
    return(
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12 col-span-6">
                <input type="text" className="p-4 m-4 col-span-9" placeholder={lang[langKey].gptSearchPlaceHolder}></input>
                <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white">{lang[langKey].search}</button>
            </form>
        </div>
    )
}
export default GptSearchBar;