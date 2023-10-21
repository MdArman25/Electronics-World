import Swal from 'sweetalert2'

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const img = form.img.value;
        const BrandName = form.BrandName.value;
        const Type = form.product.value;
        const Price = form.Price.value;
        const ShortDescription = form.ShortDescription.value;
        const  Ratting= form.Ratting.value;

        const NewProduct = { name, img, BrandName, Type, Price, ShortDescription, Ratting }

        console.log(NewProduct);

        // send data to the server
        fetch('https://assignment-njaqjo60c-md-armans-projects-bf1c950b.vercel.app/AddProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(NewProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                      })
                }
            })
    }


    return (
        <div className="bg-[#F4F3F0] p-24 max-w-screen-xl rounded-xl mx-auto mt-30">
            <h2 className="text-3xl font-extrabold my-6">Add a Product</h2>
            <form className='' onSubmit={handleAddProduct}>
                {/* form name and img row */}
                <div className="md:flex mb-8 gap-5 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product img</span>
                        </label>
                        <label className="input-group">
                            <input type="url" name="img" placeholder="Product Img" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form BrandName row */}
                <div className="md:flex mb-8 gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="BrandName" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Select a product:</span>
                        </label>
                        
<select className=' input input-bordered ' name="product" id="productSelect">
    <option value="SmartPhones">SmartPhones</option>
    <option value="Computer">Computer</option>
    <option value="Watch">Watch</option>
    <option value="HeadPhone">Headphone</option>
    <option value="Camera">Camera</option>
    <option value="Tv">Tv</option>
</select>
                    </div>
                </div>
                {/* form Price and ShortDescription row */}
                <div className="md:flex mb-8 gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="Price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Ratting </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="Ratting" placeholder=" Ratting" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Short Description url row */}
                <div className="mb-8 ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="ShortDescription" placeholder="Short Description " className="input input-bordered w-full h-20" />
                        </label>
                    </div>
                </div>
<div className='flex justify-center'>
                <input type="submit" value="Add Product" className="btn btn-success w-6/12 border-2 hover:cursor-pointer"/>

</div>
            </form>
        </div>
    );
};

export default AddProduct;