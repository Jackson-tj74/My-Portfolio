import { Outlet } from "react-router";
import Footer from "./Footer";
import { NavBar } from "./NavBar";

export function ShowOut(){
return(
    <>
  
    <NavBar />
    <Outlet />
    
    </>
)
}