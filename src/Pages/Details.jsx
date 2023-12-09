import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
  const Product = useLoaderData();
  const { name, img, BrandName, Type, Price, ShortDescription, Ratting } =
  Product;
  const AddProduct = { name, img, BrandName, Type, Price, ShortDescription, Ratting } 
  ;
  console.log(AddProduct);
const handleAddCart =()=>{
   fetch('https://assignment-ig8ytlpp2-md-armans-projects-bf1c950b.vercel.app/AddCart',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(AddProduct),credentials:"include"
   })
   .then(res =>res.json())
   .then(data=>{
    console.log(data);
    if(data.insertedId){
      Swal.fire({
          title: 'Success!',
          text: 'Product Added Card Successfully',
          icon: 'success',
          confirmButtonText: 'Done'
        })
  }
   })
}
    

  return (
    <div className=" mx-auto flex justify-center mt-20">
      <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl  mt-10 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  ">
        <img
          className="  object-cover ] rounded-t-lg md:w-2/5   md:rounded-none md:rounded-l-lg"
          src={img}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
        <h2 className="card-title flex justify-center mb-5">
      {name}
      <div className="badge badge-secondary">{Type}</div>
    </h2>
          {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5> */}
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {ShortDescription}
          </p>
       <p className="font-bold mb-5 text-xl">${Price}</p>
       <div className="flex justify-between ">
       <p className="font-bold mb-5 text-xl">{BrandName}</p>
       <p className="font-bold mb-5 text-xl pr-20">{Ratting}</p>
       </div>
        <Link>  <div onClick={handleAddCart}
            className="w-fit md:w-full
         inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Cart
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </div></Link>
        </div>
      </a>
    </div>
  );
};

export default Details;


























