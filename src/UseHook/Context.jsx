import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProver";


const Context = () => {

    const all = useContext(AuthContext)
    return all;
};

export default Context;