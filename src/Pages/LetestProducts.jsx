import { useEffect, useState } from "react";
import LatestCard from "../Components/LatestCard";

const LatestProducts = () => {
    const [Product, setProduct] = useState([]);


  
  useEffect(() => {
    fetch("/LatestProduct.json")
    .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  console.log(Product);
    return (
        <div>
            <p className="text-2xl font-extrabold justify-center flex my-10">Our Latest Product</p>
 <div className="grid md:grid-cols-2 justify-center lg:grid-cols-3 gap-10  mx-5">
        {Product.map((Product) => (
          <LatestCard key={Product.id} Product={Product}></LatestCard>
        ))}
      </div>
        </div>
    );
};

export default LatestProducts;