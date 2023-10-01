import { useGetCarsQuery } from "../../../Redux/services/baseApi";
import CarCard from "../../../components/CarCard/CarCard";

const Cars = () => {
    const {data:cars} = useGetCarsQuery()
    return (
        <div>
           <div className="grid grid-cols-3 gap-12 mx-12 py-12">
             {cars?.slice(0,6).map(car => <CarCard key={car.id} car={car}/>)}
            </div> 
        </div>
    );
};

export default Cars;