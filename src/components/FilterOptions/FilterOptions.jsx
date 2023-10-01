const FilterOptions = () => {
    const options = [
        { id: 1, value: "relevence", text: "Relevence" },
        { id: 2, value: "relevence", text: "Relevence" },
        { id: 3, value: "relevence", text: "Relevence" },
    ]
    const options2 = [
        { id: 1, value: "all", text: "All Brands" },
        { id: 2, value: "bmw", text: "BMW" },
        { id: 3, value: "audi", text: "Audi" },
    ]
    return (
        <>
            <select className="bg-transparent  focus:outline-none py-2  flex items-center cursor-pointer">
                {options.map(({ id, value, text }) =>
                    <option value={value} key={id}>{text}</option>)}
            </select>
            {/* filter options2 */}
            <select className="bg-transparent  focus:outline-none py-2  flex items-center cursor-pointer">
                {options2.map(({ id, value, text }) =>
                    <option value={value} key={id}>{text}</option>)}
            </select>

        </>
    );
};

export default FilterOptions;