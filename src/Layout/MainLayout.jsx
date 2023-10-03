import { Outlet } from "react-router-dom";
import Header from "../Components/Header/NavBar/Navbar";

 
const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;