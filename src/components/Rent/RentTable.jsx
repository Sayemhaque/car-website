import { useSelector } from "react-redux";
import RemoveRentItems from "./RemoveRentItems";
import TableHead from "../Table/TableHead";

/* eslint-disable react/prop-types */
const RentTable = () => {
  const { rentCars } = useSelector((state) => state.carSlice)
  return (
    <div>
      {rentCars.length < 1 ? <p className="text-2xl py-4 font-bold text-center">Empty</p> :
        <table className="min-w-full divide-y divide-gray-200">
          <TableHead />
          <tbody className="bg-white divide-y divide-gray-200">
            {rentCars?.map((car) => (
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
                  <RemoveRentItems id={car.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
};

export default RentTable;