import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeRentItem } from "../../Redux/services/carSlice";

// eslint-disable-next-line react/prop-types
const RemoveRentItems = ({id}) => {
    const dispatch = useDispatch()
    const handleRemove = () => {
        dispatch(removeRentItem(id))
    }
    return (
        <FaTrash onClick={handleRemove} className="cursor-pointer"/>
    );
};

export default RemoveRentItems;