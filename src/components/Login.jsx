import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {

    const [loader, setLoader] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        setLoader(true);
        const userInfo = {
            email: data.email,
            password: data.password
        }
        await axios.post(`${import.meta.env.VITE_API}/user/login`, userInfo).then((res) => {
            console.log(res.data)
            if (res.data) {
                toast.success('LoggedIn Successfully');
                document.getElementById("my_modal_3").close();
                setTimeout(() => {
                    window.location.reload();
                    localStorage.setItem("Users", JSON.stringify(res.data.user))
                }, 1000)
                setLoader(false);
            }
            setLoader(false);
        }).catch((error) => {
            setLoader(false);
            if (error.response) {
                //console.log(error)
                toast.error("Error: " + error.response.data.message);
                setTimeout(() => { }, 3000)
            }
        })
    }

    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box dark:bg-slate-900 dark:text-white">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to='/' onClick={() => document.getElementById("my_modal_3").hideModal()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                            <h3 className="font-bold text-lg">Login</h3>
                            <div className='mt-4 space-y-2'>
                                <span>Email:</span>
                                <br />
                                <input
                                    type="email"
                                    placeholder='Enter your email'
                                    className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Password */}
                            <div className='mt-4 space-y-2'>
                                <span>Password:</span>
                                <br />
                                <input
                                    type="password"
                                    placeholder='Enter your password'
                                    className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Button */}
                            <div className='flex justify-between mt-4 px-2'>
                                <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>{loader ? <span className="loading loading-spinner loading-md"></span> : `Login`}</button>
                                <div className='flex space-x-2'><p>Not registered?</p><Link to='/signup' className='underline text-blue-500 cursor-pointer'>Signup</Link></div>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login
