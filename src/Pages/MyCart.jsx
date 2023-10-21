import { useLoaderData } from "react-router-dom";
import ShowMyCart from "../Components/ShowMyCart";

const MyCart = () => {
    const myCart =useLoaderData()
    if (myCart.length === 0) {
        return <div>No data available.</div>;
      }
        return (
        <div className="max-w-4xl mx-auto mt-20 ">
   {
    myCart.map(card=><ShowMyCart key={card._id} card={card}></ShowMyCart>)
   }
        </div>
    );
};

export default MyCart;