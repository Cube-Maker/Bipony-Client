import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export default function SellerInfo() {

    const router = useRouter()

    const [name, setName] = useState('')
    const [shopName, setShopName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [shopDescription, setShopDescription] = useState('')
    const [shopCategory, setShopCategory] = useState('')
    const [password, setPassword] = useState('')
    const [photo, setPhoto] = useState('')
    const [country, setCountry] = useState('')

    const handleSubmit =(e) => {
        const formData = {
            name,
            shopName,
            email,
            shopDescription,
            shopCategory,
            password,
            photo,
            country,
            phone
        }
        e.preventDefault()
        fetch("https://morning-castle-44437.herokuapp.com/api/vendorSignup", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            }, 
            body : JSON.stringify(formData) 
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
                console.log(data)
                router.push('/login')
            }
        })
        .catch(err => console.log(err))
    }

    const handleFile = (e) => {
        console.log(e.target.files[0])
        const imageData = new FormData()
        imageData.set('key', 'e5e7c3fd0f17a3470da9a5f0de336257')
        imageData.append('image', e.target.files[0])


        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(response => {
                console.log(response)
                setPhoto(response.data.data.display_url);
            })
            .catch(err => console.log(err))
    }

    return (
        <section className="bg-gray-200">
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form onSubmit={handleSubmit} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up as a Seller</h1>
                        <input
                            onChange={e => setName(e.target.value)}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                            name="name"
                            placeholder="Name" />
                        <input
                            onChange={e => setShopName(e.target.value)}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                            name="shop name"
                            placeholder="Your Shop Name" />

                        <input
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                            className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                            name="email"
                            placeholder="Email" />
                        <input
                            onChange={e => setPhone(e.target.value)}
                            type="phone"
                            className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                            name="email"
                            placeholder="Phone" />
                        <input
                            onChange={e => setShopDescription(e.target.value)}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                            name="email"
                            placeholder="shop description" />

                        <input
                            onChange={e => setShopCategory(e.target.value)}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                            name="password"
                            placeholder="Shop category" />
                        <input
                            onChange={e => setShopCategory(e.target.value)}
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                            name="password"
                            placeholder="Password" />

                        <input
                            onChange={handleFile}
                            type="file"
                            className="block border border-grey-light w-full p-3 rounded mb-4 "
                            name="image"
                            placeholder="Shop Image" />
                        <select className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                            onChange={e => setCountry(e.target.value)}
                        >
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
