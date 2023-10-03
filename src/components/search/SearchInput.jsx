import {FaSistrix} from "react-icons/fa"
import { useDispatch} from "react-redux";
import {  setSearch } from "../../Redux/services/searchSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchInput = () => {
    const dispatch = useDispatch()
    const [searchText,setSearchText] = useState("")
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setSearch(searchText)); 
        navigate(`/search/${searchText}`)
        setSearchText("")
        console.log(searchText)
    }
    return (
        <form onSubmit={handleSubmit} className="bg-white w-3/12 rounded-full overflow-hidden flex justify-between items-center">
          <input 
           type="text" 
           placeholder="Search..."
           name="searchInput"
           value={searchText}
           onChange={(e) => setSearchText(e.target.value)}
           className="px-3 py-2 focus:outline-none" />  
           {/* search icon */}
          {/* search icon */}
          <button type="submit">
                <FaSistrix className="w-5 h-5 mr-5 text-gray-500 font-bold cursor-pointer" />
            </button>
        </form>
    );
};

export default SearchInput;
