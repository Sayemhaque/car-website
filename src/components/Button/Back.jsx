import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Back = () => {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    } 
    return (
       <div className='fixed bottom-10 left-0 right-0 flex justify-center'>
         <Button
         style={"px-12 py-3 text-white bg-blue-400 font-semibold rounded-lg"}
         title={`Back`}
         onClick={handleBack}
        />
       </div>
    );
};

export default Back;