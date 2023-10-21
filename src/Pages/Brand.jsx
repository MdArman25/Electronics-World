import { useEffect, useState } from "react";
import BrandCard from "../Components/BrandCard";

const Brand = () => {
  const [Brand, setBrand] = useState([]);


  
  useEffect(() => {
    fetch("/Brand.json")
    .then((res) => res.json())
      .then((data) => setBrand(data));
  }, []);
  console.log(Brand);
  return (
    <div className="mt-20">
      <h1  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="text-3xl font-bold text-black  mx-auto text-center mb-10">
        Our Brand
      </h1>
      <div className="grid md:grid-cols-2 justify-center lg:grid-cols-3 gap-10  mx-5">
        {Brand.map((brand) => (
          <BrandCard key={brand.id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Brand;
