import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Tv = () => {
  const AllProduct = useLoaderData();
  // const Computer=
  console.log(AllProduct);
  const FilterProduct = AllProduct.filter((Product) => Product.Type == "Tv");
  console.log(FilterProduct);
  return (
    <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-xl mx-auto">
      {FilterProduct.map((phone) => (
        <Product key={phone._id} product={phone}></Product>
      ))}
    </div>
  );
};

export default Tv;
