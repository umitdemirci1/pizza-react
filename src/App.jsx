import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import Order from "./pages/order/order";
import Error from "./pages/error/error";
import AppLayout from "./layouts/appLayout";
import Login from "./pages/login/login";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/order",
        element: <Order />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
