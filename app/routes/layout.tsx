import { Outlet } from "react-router";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

export default function Layout(){
    return(<> 
    <Navbar/>
    <Outlet/>
    <a href="https://wa.me/905364613555" target="_blank" className="btn fixed btn-xl z-6 bottom-20 right-6 btn-circle btn-gradient btn-success" aria-label="Circle Gradient Icon Button"> <span className="icon-[tabler--brand-whatsapp] size-10 shrink-0"></span></a>
    <Footer/>
    </>)
}