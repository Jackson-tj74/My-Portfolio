import { Outlet } from "react-router";
import { NavBar } from "./NavBar";
import Footer from "./Footer";

export function ShowOut(){
return(
    <>

    <Outlet />
    <Footer />
    </>
)
}