import Button from './Button';
import { Link } from 'react-router-dom';

const BackToHome = () => {
    return (
        <Link to="/page/1" className='fixed bottom-10 left-[35%] flex justify-center'>
         <Button
         style={"px-12 py-3 text-white bg-blue-400 font-semibold rounded-lg"}
         title={`Home`}
        />
       </Link>
    );
};

export default BackToHome;