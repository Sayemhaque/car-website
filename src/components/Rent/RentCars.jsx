
import Back from "../Button/Back";
import BackToHome from "../Button/BackToHome";
import RentTable from "./RentTable";

const RentCars = () => {
    return (
        <div className="mx-12 py-5">
            <RentTable/>
            <Back />
            <BackToHome/>
        </div>
    );
};

export default RentCars;