/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { takeRent } from "../../Redux/services/carSlice";

const TakeRent = ({rentCar}) => {
    const dispatch = useDispatch()
    const handleRentCar = () => {
        dispatch(takeRent(rentCar))
    }

    return (
           <Button
            onClick={handleRentCar}
            title="Rent now"
            style="bg-blue-400 text-white font-bold px-3 py-1 rounded-md"
        />
    );
};

export default TakeRent;