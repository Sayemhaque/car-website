import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
const Home = () => {
    return (
        <section className="bg-indigo-100 min-h-screen ">
            <Header/>
            <Outlet/>
           
        </section>
    );
};

export default Home;