/* eslint-disable react/prop-types */

import { FaUserFriends, FaGasPump, FaRegHeart } from "react-icons/fa";
import { PiSteeringWheelBold } from "react-icons/pi";
import { IoIosSpeedometer } from "react-icons/io";
import Button from "../Button/Button";

const CarCard = ({ car }) => {
    const { imageUrl, car_name, year, available_seats, fuel_type, transmission, km_per_liter, monthly_rent_price } = car
    return (
        <div className="bg-indigo-100 shadow-2xl rounded-2xl p-2">
            <img
                className="w-full h-60  rounded-3xl"
                src={imageUrl}
                alt={car_name} />
            <div className="flex justify-between items-center py-4 px-3">
                {/* car name */}
                <h4 className="text-2xl font-bold text-zinc-700">
                    {car_name}
                </h4>
                {/* year */}
                <p
                    className="border-2 border-dashed border-blue-300 rounded-full font-bold px-3">
                    {year}
                </p>
            </div>
            <div className="px-3">
                <div className="flex items-center gap-20 mt-2">
                    {/* available_seats */}
                    <div className="flex items-center gap-2 ">
                        <FaUserFriends className="text-blue-400 text-lg" />
                        <p className="font-bold text-zinc-600">{available_seats} People</p>
                    </div>
                    {/* fuel_type */}
                    <div>
                        <div className="flex items-center gap-2">
                            <FaGasPump className="text-blue-400 text-lg" />
                            <p className="font-bold text-zinc-600">{fuel_type}</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-[47px] mt-2">
                    {/* available_seats */}
                    <div className="flex items-center gap-2 ">
                        <IoIosSpeedometer className="text-blue-400 text-lg" />
                        <p className="font-bold text-zinc-600">{km_per_liter} km/1-liter</p>
                    </div>
                    {/* fuel_type */}
                    <div>
                        <div className="flex items-center gap-2 ">
                            <PiSteeringWheelBold className="text-blue-400 text-lg" />
                            <p className="font-bold text-zinc-600">{transmission}</p>
                        </div>
                    </div>

                </div>
                <p className="border-b w-full border-zinc-400 py-4"></p>
                <div className="flex justify-between items-center  py-4">
                    {/* per month rent price */}
                    <h3 className="text-3xl font-semibold">${monthly_rent_price} <span className="text-lg">/month</span></h3>
                    <FaRegHeart className="text-blue-500 w-9 h-9 rounded-lg bg-blue-400 p-[7px] cursor-pointer bg-opacity-25" />
                    <Button
                    title="Rent now"
                    style="bg-blue-400 text-white font-bold px-3 py-1 rounded-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default CarCard;