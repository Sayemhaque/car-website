import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromList } from "../../Redux/services/carSlice";

// eslint-disable-next-line react/prop-types
const RemoveRentItems = ({id}) => {
    const dispatch = useDispatch()
    const handleRemove = () => {
        dispatch(removeFromList({id,name:"rent"}))
    }
    return (
        <FaTrash onClick={handleRemove} className="cursor-pointer"/>
    );
};

export default RemoveRentItems;