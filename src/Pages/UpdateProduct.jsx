// // import Swal from 'sweetalert2'

// import { useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";

// const UpdateProduct = () => {
//   const Product = useLoaderData();
//   console.log(Product);
//   const handleUpdateProduct = (event) => {
//     event.preventDefault();

//     const form = event.target;
//     const name = form.name.value;
//     const img = form.img.value;
//     const BrandName = form.BrandName.value;
//     const Type = form.product.value;
//     const Price = form.Price.value;
//     const ShortDescription = form.ShortDescription.value;
//     const  Ratting= form.Ratting.value;
//     const UpdateProduct ={ name, img, BrandName, Type, Price, ShortDescription, Ratting }

//     console.log(UpdateProduct);

//     fetch(`https://assignment-ewfoba5f2-md-armans-projects-bf1c950b.vercel.app/AddProduct/${Product._id}`, {
//       method: 'PUT',
//       headers: {
//           'content-type': 'application/json'
//       },
//       body: JSON.stringify(UpdateProduct)
//   })
//       .then(res => res.json())
//       .then(data => {
//           console.log(data);
//           if (data.modifiedCount > 0) {
//               Swal.fire({
//                   title: 'Success!',
//                   text: 'Product Updated Successfully',
//                   icon: 'success',
//                   confirmButtonText: 'OKh'
//               })
//           }
//       })


//     // fetch(`https://assignment-otikipoul-md-armans-projects-bf1c950b.vercel.app/AddProduct/${Product._id}`, {
//     //   method: "PUT",
//     //   headers: {
//     //     "content-type": "application/json",
//     //   },
//     //   body: JSON.stringify(UpdateProduct),
//     // })
//     //   .then((res) => res.json())
//     //   .then((data) => {
//     //     console.log(data);
//     //   });
//   };

//   return (
//     <div className="bg-gray-200 p-24 max-w-screen-xl rounded-xl mx-auto">
//       <h2 className="text-3xl font-extrabold my-6">Update a Product</h2>
//       <form onSubmit={handleUpdateProduct}>
//         {/* form name and quantity row */}
//         <div className="md:flex gap-4 mb-8">
//           <div className="form-control md:w-1/2">
//             <label className="label">
//               <span className="label-text text-xl font-semibold">
//                 Product Name
//               </span>
//             </label>
//             <label className="input-group">
//               <input
//                 type="text"
//                 name="name"
//                 defaultValue={Product.name}
//                 placeholder="Product Name"
//                 className="input input-bordered w-full"
//               />
//             </label>
//           </div>
//           <div className="form-control md:w-1/2 ">
//             <label className="label">
//               <span className="label-text text-xl font-semibold">
//                 Image Url
//               </span>
//             </label>
//             <label className="input-group">
//               <input
//                 type="url"
//                 name="img"
//                 defaultValue={Product.img}
//                 placeholder="Product Img"
//                 className="input input-bordered w-full"
//               />
//             </label>
//           </div>
//         </div>
//         {/* form supplier row */}
//         <div className="md:flex gap-4 mb-8">
//           <div className="form-control md:w-1/2">
//             <label className="label">
//               <span className="label-text text-xl font-semibold">
//                 Brand Name
//               </span>
//             </label>
//             <label className="input-group">
//               <input
//                 type="text"
//                 name="BrandName"
//                 defaultValue={Product.BrandName}
//                 placeholder="Brand Name"
//                 className="input input-bordered w-full"
//               />
//             </label>
//           </div>
//           <div className="form-control md:w-1/2">
//             <label className="label">
//               <span className="label-text text-xl font-semibold">
//                 Select a product:
//               </span>
//             </label>

//             <select
//               className=" input input-bordered "
//               name="product"
//               defaultValue={Product.type}
//               id="productSelect"
//             >
//               <option value="SmartPhones">SmartPhones</option>
//               <option value="Computer">Computer</option>
//               <option value="Watch">Watch</option>
//               <option value="HeadPhone">Headphone</option>
//               <option value="Camera">Camera</option>
//               <option value="Tv">Tv</option>
//             </select>
//           </div>
//         </div>
//         {/* form category and details row */}
//         <div className="md:flex gap-4 mb-8 items-center">
//           <div className="form-control md:w-1/2 ">
//             <label className="label">
//               <span className="label-text text-xl font-semibold">Price</span>
//             </label>
//             <label className="input-group">
//               <input
//                 type="text"
//                 name="Price"
//                 defaultValue={Product.Price}
//                 placeholder="Price"
//                 className="input input-bordered w-full"
//               />
//             </label>
//           </div>
//           <div className="form-control md:w-1/2">
//             <label className="label">
//               <span className="label-text text-xl font-semibold">
//                 {" "}
//                 Ratting{" "}
//               </span>
//             </label>
//             <label className="input-group">
//               <input
//                 type="text"
//                 name="Ratting"
//                 defaultValue={Product.Ratting}
//                 placeholder=" Ratting"
//                 className="input input-bordered w-full"
//               />
//             </label>
//           </div>
//         </div>

//         <div className="mb-8">
//           <div className="form-control w-full">
//             <label className="label">
//               <span className="label-text">Short Description</span>
//             </label>
//             <label className="input-group">
//               <input
//                 type="text"
//                 name="ShortDescription"
//                 defaultValue={Product.ShortDescription}
//                 placeholder="Short Description "
//                 className="input input-bordered w-full h-20"
//               />
//             </label>
//           </div>
//         </div>
//         <div className=" flex justify-center">
//           <input
//             type="submit"
//             value="Update Product"
//             className="btn btn-success w-6/12 border-2"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UpdateProduct;
