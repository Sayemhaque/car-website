/* eslint-disable react/prop-types */
import { FaTrash } from 'react-icons/fa';
import { removeFromList } from '../../Redux/services/carSlice';
import { useDispatch } from 'react-redux';

const RemoveFromFav = ({id}) => {
    const dispatch = useDispatch()
    const handleRemove = () => {
        console.log("sd")
        dispatch(removeFromList({id,name:"fav"}))
       
    }
    return (
        <FaTrash onClick={handleRemove} className="cursor-pointer text-red-300"/>
    );
};

export default RemoveFromFav;