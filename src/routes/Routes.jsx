import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";


const Routes = () => {
  const reoutesPublic = [
    {
      path: "/",
      element: <App />,
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
