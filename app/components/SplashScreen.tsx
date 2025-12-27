//import logo from "../logo.png"

import { Link } from "react-router";
import logo from "../routes/images/logo.png"
export default function SplashScreen(){
    return (
    <div className="flex w-full bg-white flex-col h-screen gap-3 justify-center items-center">
        <Link className="link text-base-content link-neutral text-xl font-bold no-underline" to="/"> <img src={logo} alt="logo" className="w-72"/> </Link>
        <span className="loading loading-ball"></span>

    </div>
    )
}