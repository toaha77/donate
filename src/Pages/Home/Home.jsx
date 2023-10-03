import { useLoaderData } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import Banner from "../../Components/Header/Banner/Banner";

 
const Home = () => {


    const cards = useLoaderData()
    
    return (
        <div className="py-1">
              <Banner></Banner>
              <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;