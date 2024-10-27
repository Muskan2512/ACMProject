import React, { useState,useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ContextStore } from '../store/ContextStore'
import toast from 'react-hot-toast'
const SignUp = () => {

  // firstName,lastName,email,password,confirmPassword
  const {setToken,setUser}=useContext(ContextStore)
  const navigate=useNavigate()
  const [signupForm,setSignUpForm]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
  })
  const handleChange=(e)=>{
    setSignUpForm({
      ...signupForm,
      [e.target.name]:e.target.value,
    })
  }
  async function handleSubmit(e){
    e.preventDefault();
    const url='http://localhost:3000/api/v1/auth/signup'
    const data=signupForm;
    try{
      // console.log(signupForm)
      const response=await axios.post(url,data);
      if(!response.data.success){
        throw new Error(response.data.message)
      }
        toast.success("Account Created Successfully");  
        navigate("/login")
      
    }catch(err){
      if(err.response.data.message==="User already exist"){
        toast.error("User already registered")
        setSignUpForm({firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",})
      }else{
        toast.error("Account not created")
      }
      console.log("Error is:",err);
    }
  }

  
  return (
    <div className='bg-[black]'>
      <div className='w-11/12 bg-[black] text-white flex lg:flex-row justify-center md:gap-[10%] gap-[2rem] flex-wrap-reverse '>
    <div className='lg:w-[50%] w-[60%] items-center flex flex-col  justify-center gap-1 lg:mt-0 mt-5 '>
    

    <form onSubmit={handleSubmit} className='w-[100%]  flex justify-center '>
      <div className='flex gap-2 flex-col  py-4  md:w-[90%] w-[100%]'>
        <label htmlFor="firstName" className='text-white'>Enter firstName<sup className='text-[#f84d4dfd]'>{" "}*</sup></label>
        
    
        <input type="text" name="firstName" id="firstName" placeholder='Enter firstName' required 
            className='w-[100%] px-4 py-3 text-[1rem] bg-richblack-800 rounded-md  text-black outline-none border-none'
            value={signupForm.firstName}
            onChange={(e)=>{handleChange(e)}}
        />
        <label htmlFor="lastName" className='text-white'>Enter lastName<sup className='text-[#f84d4dfd]'>{" "}*</sup></label>
        
    
        <input type="text" name="lastName" id="lastName" placeholder='Enter lastName' required 
            className='w-[100%] px-4 py-3 text-[1rem] bg-richblack-800 rounded-md  text-black outline-none border-none'
            value={signupForm.lastName}
            onChange={(e)=>{handleChange(e)}}
        />
        <label htmlFor="email" className='text-white'>Enter Email Address<sup className='text-[#f84d4dfd]'>{" "}*</sup></label>
        
    
        <input type="email" name="email" id="email" placeholder='Enter Email Address' required 
            className='w-[100%] px-4 py-3 text-[1rem] bg-richblack-800 rounded-md  text-black  outline-none border-none'
            value={signupForm.email}
            onChange={(e)=>{handleChange(e)}}
        />
        <label htmlFor="password" className='text-white'>Enter Password<sup className='text-[#f84d4dfd]'>{" "}*</sup></label>
        
        <div className='w-[100%]'>

        <input type="password" name="password" id="password" placeholder='Enter password' required 
             className='w-[100%] px-4 py-3 text-[1rem] bg-richblack-800 rounded-md  text-black outline-none border-none'
             value={signupForm.password}
        
             onChange={(e)=>{handleChange(e)}}
        />
        
        </div>
        <label htmlFor="confirmPassword" className='text-white'>Confirm Password<sup className='text-[#f84d4dfd]'>{" "}*</sup> </label>
        
        <div className='w-[100%]'>

        <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Enter confirm password' required 
             className='w-[100%] px-4 py-3 text-[1rem] bg-richblack-800 rounded-md  text-black outline-none border-none'
             value={signupForm.confirmPassword}
        
             onChange={(e)=>{handleChange(e)}}
        />
        
        </div>
        <button className='bg-yellow-500 py-2 text-black w-[100%] rounded-md' >
    {"Sign Up"}
        
    </button>
      </div>
      </form>

    
    </div>
    <div className='lg:w-[40%]  lg:h-[100%] flex justify-center items-center relative'> 
        <div className='relative'>
        <img src="https://preview.colorlib.com/theme/philosophy/images/thumbs/masonry/shutterbug-800.jpg" alt="" className='relative z-10 lg:w-full lg:h-fit md:h-[400px] h-[300px]'/>
        </div>
    </div> 
    </div>
    </div>
  )
}

export default SignUp
