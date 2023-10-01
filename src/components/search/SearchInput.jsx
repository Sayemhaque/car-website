import {FaSistrix} from "react-icons/fa"
const SearchInput = () => {
    return (
        <div className="bg-white w-3/12 rounded-full overflow-hidden flex justify-between items-center">
          <input 
           type="text" 
           placeholder="Search..."
           className="px-3 py-2 focus:outline-none" />  
           {/* search icon */}
           <FaSistrix 
           className="w-5 h-5 mr-5 text-gray-500 font-bold cursor-pointer"/>
        </div>
    );
};

export default SearchInput;
