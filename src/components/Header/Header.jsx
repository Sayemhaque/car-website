import FilterOptions from "../FilterOptions/FilterOptions";
import SearchInput from "../search/SearchInput";

const Header = () => {
    return (
        <header className="bg-indigo-100 mx-12 px-5 py-4 rounded-lg shadow-md flex items-center gap-12">
            {/* search input */}
             <SearchInput/>
            {/* filters */}
            <FilterOptions/>
        </header>
    );
};

export default Header;