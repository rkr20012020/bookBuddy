import React, { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import {useForm} from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

const Signup = () => {
    
   const location = useLocation()
   const navigate = useNavigate()
   const from = location.state?.form?.pathname || '/';
   const [loader,setLoader] = useState(false);
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
      setLoader(true);
      const userInfo = {
         fullname:data.fullname,
         email:data.email,
         password:data.password
      }
      await axios.post(`${import.meta.env.VITE_API}/user/signup`,userInfo).then((res)=>{
        // console.log(res.data)
         if(res.data){
            toast.success('SignedUp Successfully');
            setLoader(false);
            navigate(from , {replace:true})
         }
         localStorage.setItem("Users",JSON.stringify(res.data.user))
         window.location.reload();
         setLoader(false);
      }).catch((error) => {
         if(error.response){
            //console.log(error)
            setLoader(false);
            toast.error("Error: " + error.response.data.message);
         }
      })
    }

  return (
     <>
       <div className='flex h-screen items-center justify-center'>
                <div className="w-[600px]">
                    <div className="modal-box dark:bg-slate-900 dark:text-white">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                         <Link to='/'>
                         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                         </Link>
                        <h3 className="font-bold text-lg">Signup</h3>
                        <div className='mt-4 space-y-2'>
                            <span>Name:</span>
                            <br />
                            <input
                            type="fullname"
                            placeholder='Enter your name'
                            className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                            {...register("fullname", { required: true })}
                            />
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                         </div>
                         
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
                            <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>{loader ? <span className="loading loading-spinner loading-md"></span> : `Signup`}</button>
                            <div>Already registered? <Link to='/' className='underline text-blue-500 cursor-pointer'>Login</Link></div>
                            
                         </div>
                         </form>
                    </div>
                </div>
            </div>
     </>
  )
}

export default Signup
