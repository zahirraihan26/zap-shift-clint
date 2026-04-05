import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Rider from "../Pages/Rader/Rider";
import Sendpercel from "../Pages/SendPercel/Sendpercel";
import DashboardLayout from "../Layouts/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
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
  {
    element: <DashboardLayout />,
    children: [
        {
           path:'rider',
           element:<PrivateRoutes> <Rider></Rider> </PrivateRoutes>
        } ,
        {
          path:'send-percel',
          element:<PrivateRoutes><Sendpercel></Sendpercel></PrivateRoutes>,
          loader:()=> fetch('/serviescenter.json').then(res=>res.json())
        }
    ]
  },
  {
    path:'/',
    Component : AuthLayout,
    children:[
      {
        path:'login',
        Component: Login
      },
      {
        path :'register',
        Component:Register
      }
    ]
  }
]);