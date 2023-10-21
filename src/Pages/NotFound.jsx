import { Link, useRouteError } from "react-router-dom";
import notfound from '../assets/NotFound/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg';

const NotFound = () => {
    const error =useRouteError()
    console.log(error);
    return (
        <div className="grid text-center  text-xl font-bold  items-center my-10">
            <h2 className="text-2xl font-bold ">Opps !!!!</h2>
            <p>{error.statusText || error.message} </p>
            {
                error.status = 404 && 
                <div>
                    <h1>Page Not Found </h1>
                    <img className="flex  mx-auto" src={notfound} alt="" />
                  <Link to={'/'}> <button className="btn text-xl font-bold btn-primary ">Go Back</button></Link>
                </div>
            }
        </div>
    );
};

export default NotFound;