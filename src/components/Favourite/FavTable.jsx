import { useSelector } from "react-redux";
import RemoveFromFav from "./RemoveFromFav";
import TableHead from "../Table/TableHead";

/* eslint-disable react/prop-types */
const FavTable = () => {
  const {favouriteCars} = useSelector((state) => state.carSlice)
    return (
        <div>
        {favouriteCars.length < 1 ? <p className="text-2xl py-4 font-bold text-center">Empty</p> :
         <table className="min-w-full divide-y divide-gray-200">
         <TableHead/>
         <tbody className="bg-white divide-y divide-gray-200">
           {favouriteCars?.map((car) => (
             <tr key={car.id}>
               <td className="px-6 py-4 whitespace-no-wrap">
                 {car.car_name}
               </td>
               <td className="px-6 py-4 whitespace-no-wrap">
                 {car.year}
               </td>
               <td className="px-6 py-4 whitespace-no-wrap">
                 {car.fuel_type}
               </td>
               <td className="px-6 py-4 whitespace-no-wrap">
                 ${car.monthly_rent_price}
               </td>
               <td className="px-6 py-4 whitespace-no-wrap">
                 <RemoveFromFav id={car.id}/>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
        }
       </div>
    );
};

export default FavTable;