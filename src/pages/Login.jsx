import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { login } from '../store/action';

export default function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const history = useHistory()
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  
  const dispatch = useDispatch()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(formData))
    setTimeout(()=> {
      history.push('/')
    }, 500)
  }
  
  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-900 ">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-red-400 shadow-lg w-full h-full rounded-3xl absolute  transform -rotate-6">
          </div>
          <div className="card bg-yellow-400 shadow-lg w-full h-full rounded-3xl absolute  transform rotate-6">
          </div>
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label className="block text-sm text-gray-700 text-center font-semibold">
              CMS-VirtualBazaar
            </label>
            <form onSubmit={handleOnSubmit} className="mt-10">
              <div className="mt-7">                
                <input value={formData.email} onChange={handleOnChange} name="email" type="email" placeholder="Email" className="mt-1 pl-3 py-3 block w-full border focus:border-yellow-500 bg-gray-100 h-11 rounded-xl focus:outline-none shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 placeholder-gray-500 placeholder-opacity-30"/>                           
              </div>
              <div className="mt-7">                
                <input value={formData.password} onChange={handleOnChange} name="password" type="password" placeholder="Password" className="mt-1 pl-3 py-3 block w-full border focus:border-yellow-500 bg-gray-100 h-11 rounded-xl focus:outline-none shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 placeholder-gray-500 placeholder-opacity-30"/>                           
              </div>
              <div className="mt-7">
                <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Login
                </button>
              </div>
              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md"/>
                <p className="block font-medium text-sm text-gray-700 w-full">
                    Merchant
                </p>
                <hr className="border-gray-300 border-1 w-full rounded-md"/>
              </div>
              <div className="flex mt-7 justify-center w-full">
                {/* <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Google
                </button> */}
              </div>
  
              <div className="mt-7">
                <div className="flex items-center text-center">
                  <label className="w-full text-sm text-gray-600">Don't have an account?</label>
                  <NavLink to="/register" className="w-full text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Create Account
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    //  <div className="font-sans">
    //             <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
    //                 <div className="relative sm:max-w-sm w-full">
    //                     <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
    //                     <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
    //                     <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
    //                         <label className="block text-sm text-gray-700 text-center font-semibold">
    //                             Login
    //                         </label>
    //                         <form method="/#" action="/#" className="mt-10">
                                               
    //                             <div>
    //                                 <input type="email" placeholder="Email" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
    //                             </div>
                    
    //                             <div className="mt-7">                
    //                                 <input type="password" placeholder="Contraseña" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
    //                             </div>
    
    //                             <div className="mt-7 flex">
    //                                 <label className="inline-flex items-center w-full cursor-pointer">
    //                                     <input id="remember_me" type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember"/>
    //                                     <span className="ml-2 text-sm text-gray-600">
    //                                         Remember me
    //                                     </span>
    //                                 </label>
                    
    //                                <div className="w-full text-right">     
    //                                     <a className="underline text-sm text-gray-600 hover:text-gray-900" href="/#">
    //                                         ¿Olvido su contraseña?
    //                                     </a>                                  
    //                                </div>
    //                             </div>
                    
    //                             <div className="mt-7">
    //                                 <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
    //                                     Login
    //                                 </button>
    //                             </div>
                    
    //                             <div className="flex mt-7 items-center text-center">
    //                                 <hr className="border-gray-300 border-1 w-full rounded-md"/>
    //                                 <label className="block font-medium text-sm text-gray-700 w-full">
    //                                     Accede con
    //                                 </label>
    //                                 <hr className="border-gray-300 border-1 w-full rounded-md"/>
    //                             </div>
                    
    //                             <div className="flex mt-7 justify-center w-full">
    //                                 <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        
    //                                     Facebook
    //                                 </button>
                    
    //                                 <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        
    //                                     Google
    //                                 </button>
    //                             </div>
                    
    //                             <div className="mt-7">
    //                                 <div className="flex justify-center items-center">
    //                                     <label className="w-full text-sm text-gray-600">¿Eres nuevo?</label>
    //                                     <a href="/#" className="w-full text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
    //                                         Crea una cuenta
    //                                     </a>
    //                                 </div>
    //                             </div>
    //                         </form>
    //                     </div>
    //                 </div>
    //             </div>
                
    //         </div>
  
  )
}