import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
const Table = () => {
    const {rentCars} = useSelector((state) => state.carSlice)
    return (
        <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Car Name
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Year
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Fuel Type
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Monthly Rent Price
          </th>
        </tr>
      </thead>
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
          </tr>
        ))}
      </tbody>
    </table>
    );
};

export default Table;