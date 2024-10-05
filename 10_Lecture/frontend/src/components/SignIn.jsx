import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/userDetail/ProfileContext';
import AuthContext from '../context/Auth/AuthContext';

function SignIn() {
    const navigate = useNavigate();

    const [formData, SetFormData] = useState({
        email: '',
        password: ''
    })

    const {setUserDetail} = useContext(UserContext)
    const {login} = useContext(AuthContext)
    const signup = () => {
        navigate('/signup')
    }
    // const handleprofile = () => {
    //     setRequest('profile')
    // }

    const changeHandler = (e) => {
        const { name, value } = e.target
        SetFormData({ ...formData, [name]: value })

    }
    const signinHandler = async (e) => {
        try {

            e.preventDefault()
            const response = await axios.post(`http://localhost:3000/auth/signin`, formData, {
                headers: {
                    Authorization: `${localStorage.getItem('token')}`
                }
            });
            const settoken = response.data.token
            localStorage.setItem('token', settoken)
            console.log(response);
            console.log(response.data.email)
            setUserDetail(response.data.email)
            console.log('status code is ', response.status);
            if (response.status === 200) {
                toast.success('Login Successfully')
                setTimeout(() => {
                    navigate('/')
                }, 1000);
            }
            login()

        }
        catch (error) {
            if (error.response && error.response.status === 403) {
                toast.error('Wrong email or password')
            }
            else {
                toast.error('Something went wrong')
            }
        }
    }

    return (

        <form onSubmit={signinHandler} action='' method='post' className=" h-screen gap-4 justify-start bg-gradient-to-tl from-zinc-900 to-slate-900 w-full  flex-col flex flex-wrap items-center">
            <div><Toaster /></div>
            <h1 className='text-4xl text-white font-bold'>Signin</h1>                                     
            <div className=" border-indigo-500  border-2 justify-center p-4 bg-gradient-to-tl text-white from-zinc-800 to-slate-700 rounded-lg  flex flex-col  min-w-[30%] ">
                <div className='mb-4'>
                    <h1 className="text-white text-center font-bold text-3xl ">Welcome to <span className='bg-gradient-to-r from-sky-600 to-indigo-600 text-transparent bg-clip-text'>100xDevs</span> </h1>
                    <p className='text-center text-gray-400'>Login to access paid content</p>
                </div>
                <div className="relative mb-4">
                    <label for="email" className="leading-7 text-sm ">User Name</label>
                    <input
                        minLength={6}
                        maxLength={30}
                        required
                        onChange={changeHandler}
                        placeholder="Enter email"
                        type="text"
                        value={formData.email}
                        name="email"
                        className="w-full  bg-zinc-900 rounded border border-none border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>

                <div className="relative mb-4">
                    <label for="password" className="leading-7 text-sm ">Password</label>
                    <input
                        minLength={8}
                        maxLength={30}
                        required
                        onChange={changeHandler}
                        placeholder='Your Password'
                        type="password"
                        value={formData.password}
                        name="password"
                        className="w-full bg-zinc-900 rounded  border border-none border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign in</button>
                <p className='text-center'>or</p>
                <h1 onClick={signup} className='signup text-center text-gray-500  cursor-pointer '>Sign up</h1>
                {/* <button onClick={handleprofile} className="text-white bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg">profile</button> */}
            </div>
        </form>

    )
}

export default SignIn
