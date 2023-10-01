import Header from "../../components/Header/Header";
import Cars from "./cars/Cars";
const Home = () => {
    return (
        <section className="bg-indigo-100 min-h-screen">
            <Header/>
            <Cars/>
        </section>
    );
};

export default Home;