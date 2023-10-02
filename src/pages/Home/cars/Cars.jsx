import { useParams } from "react-router-dom";
import { useGetCarsQuery } from "../../../Redux/services/baseApi";
import CarCard from "../../../components/CarCard/CarCard";
import PaginationButtons from "../../../components/pagination/PaginationButtons";

const Cars = () => {
    const { data: cars } = useGetCarsQuery()
    const { page } = useParams();
    const itemsPerPage = 6;
    const currentPage = parseInt(page) || 1;


    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const carsToShow = page >= 1 ? cars?.slice(startIndex, endIndex) : cars?.slice(0,6);
    return (
        <div>
            <div className="grid grid-cols-3 gap-6 mx-12 py-5">
                {carsToShow?.map(car => <CarCard key={car.id} car={car} />)}
            </div>
            <PaginationButtons />
        </div>
    );
};

export default Cars;