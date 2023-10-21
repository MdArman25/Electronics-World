/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
import { useEffect } from "react";
const BrandCard = ({brand}) => {
    const {img,name,}=brand
    // fetch()
    // useEffect(() => {
    //     AOS.init({
    //       duration: 1000, 
    //       once: true,   
    //     });
    //   }, []);
    return (
        <div>
           
<Link to={`Brand/${name}`}><div   className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
    <p>
        <img className="rounded-lg h-60 mx-auto" src={img} alt="" />
    </p>
    <div className="p-5">
        <p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </p>
      
    </div>
</div></Link>
 
        </div>
    );
};

export default BrandCard;