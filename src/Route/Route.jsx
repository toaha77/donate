import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Error from "../Pages/Error/Error";
import DetailsCard from "../Pages/DetailsCard/DetailsCard"; 


 
const myCreatedRoute =  createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>
,        children: [
           {
             path: '/',
             element: <Home></Home>,
            loader: ()=> fetch('/data.json')
           },
           {
            path: '/donation',
            element: <Donation></Donation>
           },
           {
            path: '/statistics',
            element : <Statistics></Statistics>
           },
           {
            path: '/cards/:id',
            element: <DetailsCard></DetailsCard>,
            loader: ()=>  fetch('/data.json')
           }

        ]
    }
])
   

export default myCreatedRoute;