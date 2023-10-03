import { useParams } from "react-router-dom";
import { useGetCarsQuery } from "../../Redux/services/baseApi";
import CarCard from "../../components/CarCard/CarCard";
import Back from "../../components/Button/Back";

const SearchItems = () => {
    const { data: cars } = useGetCarsQuery()
    const { searchText } = useParams()

    // Filter cars based on searchText
    const searchedCar = !searchText
        ? []
        : cars?.filter(car => car.car_name.toLowerCase().includes(searchText.toLowerCase()));

    return (
       <>
        <div className="grid grid-cols-3 gap-6 mx-12 py-5">
            {searchedCar.map(car => <CarCard key={car.id} car={car} />)}
        </div>
        <Back/>
       </>
    );
};

export default SearchItems;