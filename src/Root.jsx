import { Outlet } from "react-router-dom";
import Navber from "./Components/Navber";

const Root = () => {
    return (
        <div>
           {/* <p>this is root section</p> */}
           <Navber></Navber>
           <Outlet></Outlet> 
        </div>
    );
};

export default Root;