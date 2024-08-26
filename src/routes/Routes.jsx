import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { AddCondominium } from "../admin/AddCondominium.jsx";
import { Notification } from "../admin/Notification.jsx";
import { Payment } from "../admin/Payment.jsx";
import { Service } from "../admin/Service.jsx";
import { Statistics } from "../admin/Statistics.jsx";
import { Apart } from "../admin/Apart.jsx";
import { CreateApartment } from "../admin/apartment/CreateApartment.jsx";


const Routes = () => {
  const reoutesPublic = [
    {
      path: "/",
      element: <App />,
    },
    {
      path:"/apartamento",
      element:<Apart/>,
    },
    
    {
      path: "/notificaciones",
      element: <Notification/>,
    },
    {
      path: "/servicio",
      element: <Service />,
      
    },
    {
      path: "/estadistica",
      element: <Statistics />,
    },
    {
      path: "/pagos",
      element: <Payment/>,
    },
    {
      path: "/addcondominio",
      element: <AddCondominium/>,
    },
    {
      path: "/addApartamento",
      element: <CreateApartment/>,
    },
   
   
  ];
  const routesPrivate=[
    {
      
    }
  ]

  const router = createBrowserRouter(reoutesPublic,routesPrivate);
  return <RouterProvider router={router} />;
};

export default Routes;
