import { createBrowserRouter } from "react-router";
import RootLaout from "../Laouts/RootLaout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLaout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'coverage',
            Component:Coverage,
            loader:()=> fetch('/serviescenter.json').then(res=>res.json())
        }
    ]
  },
]);