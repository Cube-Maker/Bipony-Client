import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, errors, reset } = useForm();
    const router = useRouter();
    function onSubmitForm(values) {
        reset();
        console.log(values)
        fetch("https://morning-castle-44437.herokuapp.com/api/signin", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(values),

        })
            .then((res) => res.json())
            .then((data) => {
                //   router.push("/signIn");
                console.log(data);
            })
            .catch((err) => console.log(err));
    }
    return (
        <section className="bg-gray-200">
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Login</h1>
                        <form onSubmit={handleSubmit(onSubmitForm)}>
                            <input
                                type="email"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email"
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'You must enter your email address',
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'This is not long enough to be an email',
                                    },
                                    maxLength: {
                                        value: 120,
                                        message: 'This is too long',
                                    },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'This needs to be a valid email address',
                                    },
                                })} />

                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password"
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'You must enter your email address',
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'This is not long enough to a Strong Password',
                                    },
                                    maxLength: {
                                        value: 32,
                                        message: 'This is too long',
                                    },
                                })} />
                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
                            >Log In</button>
                        </form>
                    </div>
                    <div className="text-grey-dark mt-6">
                        Dont  have an account?
                        <Link className="ms-2" href="/signUp">
                            <a>Sign Up</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;