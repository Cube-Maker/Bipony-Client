import React from 'react'

import Link from 'next/link'

export default function SellerInfo() {
    return (
        <section className="bg-gray-200">
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up as a Seller</h1>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                            name="name"
                            placeholder="Name" />
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                            name="shop name"
                            placeholder="Your Shop Name" />

                        <input
                            type="email"
                            className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                            name="email"
                            placeholder="Email" />
                        <input
                            type="phone"
                            className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                            name="email"
                            placeholder="Phone" />
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                            name="email"
                            placeholder="shop description" />

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                            name="password"
                            placeholder="Shop category" />
                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                            name="password"
                            placeholder="Password" />

                        <input
                            type="file"
                            className="block border border-grey-light w-full p-3 rounded mb-4 "
                            name="Phone"
                            placeholder="Shop Image" />
                        <select className="block border border-grey-light w-full p-3 rounded mb-4 outline-none">
                            <option className="block border border-grey-light w-full p-3 rounded mb-4">Bangladesh</option>
                            <option>India</option>
                            <option>Pakistan</option>
                            <option>Srilanka</option>
                            <option>China</option>
                        </select>
                        <button

                            type="submit"
                            className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>

                    </form>
                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <Link className="ms-2" href="/login">
                            <a>Login</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
