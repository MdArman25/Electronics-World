import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const SmartPhones = () => {
  const AllProduct = useLoaderData();
  const FilterProduct = AllProduct.filter(
    (Product) => Product.Type == "SmartPhones"
  );
  console.log(FilterProduct);
  console.log(AllProduct);
  return (
    <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-xl mx-auto ">
      {FilterProduct.map((phone) => (
        <Product key={phone._id} product={phone}></Product>
      ))}
    </div>
  );
};

export default SmartPhones;
