import Back from "../Button/Back";
import BackToHome from "../Button/BackToHome";
import FavTable from "./FavTable";

const FavouriteCars = () => {
    return (
        <div className="mx-12 py-5">
           <FavTable/>
           <Back/>
           <BackToHome/>
        </div>
    );
};

export default FavouriteCars;