import { Link } from "react-router-dom";
import SearchInput from "../search/SearchInput";
import { useSelector } from "react-redux";

const Header = () => {
    const { rentCars, favouriteCars } = useSelector((state) => state.carSlice)
    return (
        <header className="bg-indigo-100 mx-12 px-5 py-4 rounded-lg shadow-md flex items-center gap-12">
            {/* search input */}
            <SearchInput />
            {/* filters */}
            {/* <FilterOptions /> */}
            <Link to='rent'>
                <div className={`relative`}>
                    <p>Rent</p>
                    <p className='text-sm absolute -top-3 -right-3 bg-blue-400  text-white w-5 h-5 flex justify-center items-center rounded-full'>{rentCars.length}</p>
                </div>
            </Link>
            <Link to='favourite'>
                <div className={`relative`}>
                    <p>Favourite</p>
                    <p className='text-sm absolute -top-3 -right-3 bg-blue-400 text-white w-5 h-5 flex justify-center items-center rounded-full'>{favouriteCars.length}</p>
                </div>
            </Link>
        </header>
    );
};

export default Header;