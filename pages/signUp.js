import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import Link from "next/link";
import { useState } from "react";

const signUp = () => {
    const router = useRouter()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const handleSignUp = async(e) => {
        e.preventDefault()
        try {
            const data = await fetch("https://morning-castle-44437.herokuapp.com/api/signup", {
                name,
                email,
                password,
                phone
            })
            console.log(data)
            alert("sugn up succesfully")
            Cookies.set('userInfo', data);
            console.log(Cookies)
            router.push('/login')
        }
        catch(err) {
            alert("something wrong")
        }
    }

    return (
        <section className="bg-gray-200">
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form onSubmit={handleSignUp} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <input
                            onChange={e => setName(e.target.value)}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            placeholder="Name" />

                        <input
                            onChange={e => setEmail(e.target.value)}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />

                        <input
                        onChange={e => setPassword(e.target.value)}
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />

                        <input
                        onChange={e => setPhone(e.target.value)}
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="Phone"
                            placeholder="Phone" />
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
    );
}

export default signUp;