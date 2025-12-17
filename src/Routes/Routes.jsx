import { createBrowserRouter } from "react-router";
import Login from "../Components/Login/Login";
import Root from "../Pages/Root/Root";

const router = createBrowserRouter([
    {
        path:'/',
        Component:Root
    },
    {
        path:"/login",
        Component:Login
    }
])
export default router