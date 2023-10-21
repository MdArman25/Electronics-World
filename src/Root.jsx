import { Outlet } from "react-router-dom";
import Navber from "./Components/Navber";
import Footer from "./Pages/Footer";

const Root = () => {
    return (
        <div>
           {/* <p>this is root section</p> */}
           <Navber></Navber>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Root;