/* eslint-disable react/prop-types */
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToFavourite } from "../../Redux/services/carSlice";

const AddToFav = ({favCar}) => {
    const dispatch = useDispatch()

    const handeAddToFav = () => {
      dispatch(addToFavourite(favCar))
    }
    return (
        <FaRegHeart onClick={handeAddToFav} className="text-blue-500 w-9 h-9 rounded-lg bg-blue-400 p-[7px] cursor-pointer bg-opacity-25" />
    );
};

export default AddToFav;