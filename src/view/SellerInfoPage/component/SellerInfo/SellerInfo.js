import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function SellerInfo() {

    const [photo, setPhoto] = useState(null)
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // const [name, setName] = useState('')
    // const [shopName, setShopName] = useState('')
    // const [email, setEmail] = useState('')
    // const [phone, setPhone] = useState('')
    // const [shopDescription, setShopDescription] = useState('')
    // const [shopCategory, setShopCategory] = useState('')
    // const [password, setPassword] = useState('')
    // const [country, setCountry] = useState('')

    // const handleSubmit =(e) => {
    //     e.preventDefault()
    //     fetch("https://morning-castle-44437.herokuapp.com/api/vendorSignup", {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json"
    //         }, 
    //         body : JSON.stringify( name,
    //             shopName,
    //             email,
    //             shopDescription,
    //             shopCategory,
    //             password,
    //             photo,
    //             country,
    //             phone) 
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data) {
    //             console.log(data)
    //             router.push('/login')
    //         }
    //     })
    //     .catch(err => console.log(err))
    // }

    const onSubmit = data => {
        const formData = {
            name: data.name,
            shopName: data.shopName,
            email: data.email,
            description: data.description,
            category: data.category,
            password: data.password,
            photo: photo,
            country: data.country,
            phone: data.phone

        }
        console.log(formData)

        fetch('https://morning-castle-44437.herokuapp.com/api/vendorSignup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            alert('service added succes')
            router.push('/shop')
            console.log(data)
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
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up as a Seller</h1>
                        <input
                            {...register("name")}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                            name="name"
                            placeholder="Name" />
                        <input
                            {...register("shopName")}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                            name="shop name"
                            placeholder="Your Shop Name" />

                        <input
                            {...register("email")}
                            type="email"
                            className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                            name="email"
                            placeholder="Email" />
                        <input
                            {...register("phone")}
                            type="phone"
                            className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                            name="email"
                            placeholder="Phone" />
                        <input
                            {...register("description")}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                            name="email"
                            placeholder="shop description" />

                        <input
                            {...register("category")}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                            name="password"
                            placeholder="Shop category" />
                        <input
                            {...register("password")}
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
                            {...register("country")}
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
