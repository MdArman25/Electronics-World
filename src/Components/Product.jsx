import { Link } from "react-router-dom";

const Product = ({product}) => {
    const {Price,_id,img,Ratting,name,Type,Sho}= product
console.log(product);
    return (
        <div className=" ">
{/* <div  data-aos="fade-up" className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={img} alt="" />
    </a>
    <div className="p-5">

        <Link to={`/details/${_id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           About more Details
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div> */}

<div className="card  bg-base-100 shadow-xl h-60 md:h-72">
  <figure><img className="h-40" src={img} /></figure>
  <div className="card-body">
    <h2 className="card-title flex justify-center mb-5">
      {name}
      <div className="badge badge-secondary">{Type}</div>
    </h2>
    
   <div className="flex justify-between items-center "> <div className="flex gap-5 text-xl font-medium" >
    <p>Ratting : {Ratting}</p>
    <p>Price:${Price}</p>
    </div>
    <div className="card-actions justify-end text-lg font-medium ">
 <Link to={`/UpdateProduct/${_id}`}>     <div className="badge badge-outline">Update</div> </Link>
      <Link to={`/DetailsProduct/${_id}`}><div className="badge badge-outline"> details</div></Link>
    </div></div>
  </div>
</div>
 
           </div>
    );
};

export default Product;



