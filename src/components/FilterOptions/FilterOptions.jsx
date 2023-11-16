import { useGetCarsQuery } from "../../Redux/services/baseApi";

const FilterOptions = () => {
    const { data: cars } = useGetCarsQuery()
    const options2 = [
        { id: 1, value: "relevence", text: "Relevence" },
        { id: 2, value: "relevence", text: "Relevence" },
        { id: 3, value: "relevence", text: "Relevence" },
    ]

    return (
        <>
        <div className="flex items-center gap-2">
        <p>Filter by price:</p>
            <select className="bg-transparent focus:outline-none py-2 flex items-center cursor-pointer">
                {cars?.map((car) => (
                    <>
                        <option value={car.monthly_rent_price} key={car.id}>
                            {car.monthly_rent_price}$
                        </option>
                    </>
                ))}
            </select>
        </div>
            {/* filter options2 */}
            <select className="bg-transparent  focus:outline-none py-2  flex items-center cursor-pointer">
                {options2.map(({ id, value, text }) =>
                    <option value={value} key={id}>{text}</option>)}
            </select>

        </>
    );
};

export default FilterOptions;