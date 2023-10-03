import BackToHome from "../Button/BackToHome";

const NotFoundPage = () => {
    return (
        <div className="flex justify-center items-center h-screen text-cente bg-gray-100">
           <div>
            <img src="https://img.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1900.jpg?size=626&ext=jpg&ga=GA1.2.197739885.1694165161&semt=ais" alt="page not found image" />
           </div>
           <BackToHome/>
        </div>
    );
};

export default NotFoundPage;