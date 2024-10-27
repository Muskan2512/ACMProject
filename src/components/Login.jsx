import React, { useContext, useState } from 'react'
import axios from 'axios'
import { ContextStore } from '../store/ContextStore'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
const Login = () => {

  const {setToken,setUser}=useContext(ContextStore)
  const navigate=useNavigate()

  const [LoginForm,setLoginForm]=useState({
    email:"",
    password:""
  })
  function handleChange(e){
    // console.log(e.target.value);
    setLoginForm(
      {
      ...LoginForm,
      [e.target.name]:e.target.value,
    }
  )
  }
  async function handleSubmit(e){
    e.preventDefault();
    const url='http://localhost:3000/api/v1/auth/login'
    const data=LoginForm;
    try{
      // console.log(LoginForm)
      const response=await axios.post(url,data);
      if(!response.data.success){
        throw new Error("Error Occurred")
      }
      toast.success(response.data.message)
      setToken(response.data.token)
      setUser(response.data.existUser)
      localStorage.setItem("token",JSON.stringify(response.data.token))
      localStorage.setItem("user",JSON.stringify(response.data.existUser))
      navigate("/dashboard/profile")     
      console.log(response)
    }catch(err){
      toast.error(err.response.data.message)
      console.log(err);
    }
  }


  return (

    <div className='bg-[black]'>
 <div className='w-11/12 text-white flex lg:flex-row justify-center md:gap-[10%] gap-[4rem] flex-wrap-reverse '>
    <div className='lg:w-[50%] w-[60%] items-center flex flex-col  justify-center gap-1 lg:mt-0 mt-5 '>
    

    <form onSubmit={handleSubmit} className='w-[100%]  flex justify-center '>
      <div className='flex gap-2 flex-col  py-4  md:w-[90%] w-[100%]'>
        <label htmlFor="email" className='text-white'>Enter Email Address<sup className='text-[#f84d4dfd]'>{" "}*</sup></label>
        
    
        <input type="email" name="email" id="email" placeholder='Enter Email Address' required 
            className='w-[100%] px-4 py-3 text-[1rem] bg-richblack-800 rounded-md text-black outline-none border-none'
            onChange={(e)=>{handleChange(e)}}
        />
        <label htmlFor="password" className='text-white'>Enter Password<sup className='text-[#f84d4dfd]'>{" "}*</sup></label>
        
        <div className='w-[100%]'>

        <input type="password" name="password" id="password" placeholder='Enter password' required 
             className='w-[100%] px-4 py-3 text-[1rem] bg-richblack-800 text-black rounded-md  outline-none border-none'
        
             onChange={(e)=>{handleChange(e)}}
        />
        </div>
        <button className='bg-yellow-500 py-2 text-black w-[100%] rounded-md' >
    {"Sign In"}
        
    </button>
      </div>
      </form>

    
    </div>
    <div className='lg:w-[40%]  w-full lg:h-[100%] flex justify-center items-center relative '> 
        <div className='relative'>
        <img src="https://preview.colorlib.com/theme/philosophy/images/thumbs/masonry/tulips-800.jpg" alt="" className='relative z-10 lg:w-full lg:h-fit md:h-[400px] h-[300px] '/>
        </div>
    </div> 
    </div>
    </div>
     
    
  )
}

export default Login
