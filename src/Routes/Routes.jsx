import { createBrowserRouter } from "react-router";
import Login from "../Components/Login/Login";
import Root from "../Pages/Root/Root";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
       {
    path: "/login",
    Component: Login,
  },
    ],
  },
 
]);
export default router;
