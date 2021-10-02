import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import { useState } from "react";

const login = () => {

    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        const loginData = {
            email,
            password
        }
        try {
            const  data  = await fetch('https://morning-castle-44437.herokuapp.com/api/signin', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });
            console.log(data)
            Cookies.set('userInfo', data);
            router.push('/');
        } catch (err) {
            alert("err message")
        }
    }

    return (
        <section className="bg-gray-200">
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form onSubmit={handleLogin} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Login</h1>
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
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Login</button>

                    </form>
                    <div className="text-grey-dark mt-6">
                        Do not have an account?
                        <Link className="ms-2" href="/signUp">
                            <a>Sign Up</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default login;