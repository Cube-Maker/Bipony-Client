import React from 'react';

const ProductReturnPage = () => {
    return (
        <div className="w-full bg-gray-200">
            <h1 className="text-4xl leading-none">Product Return</h1>
            <section className="mx-40">
                <div className="leading-loose">
                    <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
                        <p className="text-gray-800 font-medium">Customer information</p>
                        <div className="">
                            <label className="block text-sm text-gray-00" >Name</label>
                            <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required placeholder="Your Name" aria-label="Name" />
                        </div>
                        <div className="mt-2">
                            <label className="block text-sm text-gray-600">Email</label>
                            <input className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="email" required placeholder="Your Email" aria-label="Email" />
                        </div>
                        <div className="mt-2">
                            <label className=" block text-sm text-gray-600">Address</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required placeholder="Street" aria-label="Address" />
                        </div>
                        <div className="mt-2">
                            <label className="hidden text-sm block text-gray-600">City</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required placeholder="City" aria-label="City" />
                        </div>
                        <div className="inline-block mt-2 w-1/2 pr-1">
                            <label className="hidden block text-sm text-gray-600">Country</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required placeholder="Country" aria-label="Country" />
                        </div>
                        <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                            <label className="hidden block text-sm text-gray-600">Zip</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required placeholder="Zip" aria-label="Zip" />
                        </div>
                        <p className="mt-4 text-gray-800 font-medium">Order information</p>
                        <div className="">
                            <label className="block text-sm text-gray-600">Order ID</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required placeholder="Enter order ID here" aria-label="Order ID" />
                        </div>
                        <div className="mt-2">
                            <label className="block text-sm text-gray-600">Why you returning this Product</label>
                            <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="textarea" required placeholder="Your Problem" aria-label="Problem" />
                        </div>
                        <div className="mt-4">
                            <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ProductReturnPage;