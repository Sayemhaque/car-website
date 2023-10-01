import { useGetPokemonByNameQuery } from "../../Redux/services/baseApi";
import Header from "../../components/Header/Header";

const Home = () => {
    const {data:pro} = useGetPokemonByNameQuery()
    console.log(pro)
    return (
        <section className="bg-indigo-100 h-screen">
            <Header/>
        </section>
    );
};

export default Home;