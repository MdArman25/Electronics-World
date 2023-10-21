import { data } from "autoprefixer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import Brand from "../Pages/Brand";

const ShowMyCart = ({ card , Cards, setCards }) => {
  const { _id, name, img, BrandName, Type, Price, ShortDescription, Ratting } =
    card;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
      fetch(`https://assignment-6gdgxwui5-md-armans-projects-bf1c950b.vercel.app/AddCart/${_id}`,{
      method:"DELETE"
      })
      .then(res=> res.json())
      .then(data=>{
        console.log(data);
        Swal.fire(
            'Deleted!',
            'Your Product has been deleted.',
            'success'
        )
        const remaining = Cards.filter(card => card._id !== _id);
        setCards(remaining)
      })
      }

    });
  };

  return (
    <div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="pt-3  pb-0 sm:pt-4"
      >
        <Link>
          <div className="flex items-center space-x-4 my-4 shadow-lg border-2 rounded-xl ">
            <div className="flex-shrink-0">
              <img className="w-20 rounded-full" src={img} />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="card-title">
                {name}
                <div className="badge badge-secondary">{Type}</div>
              </h2>
              {/* <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {name}
        </p> */}
              <div className="flex justify-betwee items-center gap-5">
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {ShortDescription?.length > 100 ? (
                    <p className="flex">
                      {ShortDescription?.slice(0, 60)}{" "}
                      <p className=" font-bold">...</p>
                    </p>
                  ) : (
                    <p>{ShortDescription}</p>
                  )}
                </p>
                <p>{BrandName}</p>
              </div>
            </div>
            <div className=" items-center   font-semibold mt-7 flex  gap-4 text-xl pr-7">
              <p> ${Price}</p>
              <p onClick={()=>handleDelete(_id)}>Delete Cart</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ShowMyCart;
