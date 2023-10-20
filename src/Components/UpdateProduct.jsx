// import Swal from 'sweetalert2'

import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
    const Product =useLoaderData()
    console.log(Product);
    const handleUpdateProduct = (event) => {
      event.preventDefault();
  
      const form = event.target;
  
      const name = form.name.value;
      const image = form.image.value;
      const Brand = form.Brand.value;
      const Price = form.Price.value;
      const type = form.type.value;
      const details = form.details.value;
   
      const UpdateProduct = {
        name,
        image,
        Brand,
        Price,
        type,
        details,
       
      };
  
      console.log(UpdateProduct);
  
      // send data to the server
          fetch('http://localhost:5000', {
              method: 'PUT',
              headers: {
                  'content-type': 'application/json'
              }, 
              body: JSON.stringify(UpdateProduct)
          })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
               
              })
    };
  
    return (
      <div className="bg-gray-200 p-24 max-w-screen-xl rounded-xl mx-auto mt-30">
       <h2 className="text-3xl font-extrabold my-6">Add a Product</h2>
        <form onSubmit={handleUpdateProduct}>
          {/* form name and quantity row */}
          <div className="md:flex gap-4 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Coffee Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text text-xl font-semibold">Image Url</span>
              </label>
              <label className="input-group">
                <input
                  type="url"
                  name="image"
                  placeholder="Img url"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form supplier row */}
          <div className="md:flex gap-4 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="Brand"
                  placeholder="Brand Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text text-xl font-semibold">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="Price"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex gap-4 mb-8 items-center">
            <div className="form-control md:w-1/2">
            <label className="text-xl font-semibold">Type:</label>
              <label className="input-group">
              <select className=" w-1/3 border-2" name="type">
              <option value="phone">Phone</option>
              <option value="computer">Computer</option>
              <option value="headphone">Headphone</option>
          </select>
              </label>
            </div>
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text text-xl font-semibold">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  placeholder="Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
     <div className=" flex justify-center">
      
     <input type="submit" value="Add Coffee" className="btn btn-success w-6/12 border-2"/>
     </div>
        </form>
      </div>
    );
  };
  
  export default UpdateProduct;
  