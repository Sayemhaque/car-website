/* eslint-disable use-isnan */
import {FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Button from "../Button/Button";
import { Link, useNavigate, useParams } from "react-router-dom";


const PaginationButtons = () => {
    const navigate = useNavigate()
    const {page} = useParams()
    const convertedPage = parseInt(page)
    const buttonCount = 10;
    const handleNextPage = () => {
        if (convertedPage === 10) {
            navigate(`/page/1`);
        } else {
            navigate(`/page/${convertedPage + 1}`);
        }
    }

    const handePrevPage = () => {
        if (convertedPage === 1) {
            navigate(`/page/10`);
        } else {
            navigate(`/page/${convertedPage - 1}`);
        }
        
    }
    // Create an array of button labels from 1 to 10
    const buttonLabels = Array.from({ length: buttonCount }, (_, index) => index + 1);
    return (
        <div className="py-8">
            <div className="flex justify-between items-center rounded-md mx-12 px-5 py-4 bg-indigo-100  shadow-2xl">
            <div>
                Total items 60
            </div>
            <div className="flex items-center gap-3 justify-end">
            <FaLongArrowAltLeft className="bg-white p-1 text-3xl cursor-pointer shadow-lg"
            onClick={handePrevPage}
            />
           {buttonLabels.map(title => <Link   key={title}  to={`/page/${title}`}>
           <Button 
           title={title} 
           style={"px-2 py-1 bg-white rounded-md shadow-lg"}/>
           </Link>
           )}
           <FaLongArrowAltRight className="bg-white p-1  cursor-pointer text-3xl shadow-lg" 
           onClick={handleNextPage}/>
        </div>
        </div>
        </div>
    );
};

export default PaginationButtons;