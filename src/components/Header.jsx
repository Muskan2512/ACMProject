import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ContextStore } from '../store/ContextStore'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import toast from 'react-hot-toast'
import { IoIosArrowBack } from "react-icons/io";
import { useLocation } from 'react-router-dom';

const Header = () => {
  const {token,setToken,setUser,user}=useContext(ContextStore)
  const [Clicked,setClicked]=useState(false)
  // console.log("user is:",user?.image);
  // console.log("user is:",user);
  const navigate=useNavigate();
  const location=useLocation();

  const handleLogout=()=>{
    setToken(null);
    setUser(null);
    toast.success("Logout Successful");
    localStorage.clear()
    console.log("Inside logout function")
    navigate("/");
  }

  return (
      <div className='flex bg-[#000] justify-between px-4 items-center relative text-white roboto-medium h-[20vh]'>

      <div className={`flex gap-1 items-center cursor-pointer ${location.pathname==='/'?"opacity-0":"opacity-100"}`} onClick={()=>{navigate("/")}}>
        <IoIosArrowBack className='text-[1rem]'/>
        <p className='text-gray-500'>Home</p>
        </div>
        
        <p className='amita-bold text-[3rem]'>Thoughts</p>

        {
          (token==null)?(<div className='float-right flex lg:gap-[2rem] gap-[1rem]  '>
        <NavLink to="/signup">
          <button className='hover:cursor-pointer text-[1rem] lg:text-[1.1rem] font-[400]  tracking-[1px]'>Sign Up</button>
        </NavLink>
        <NavLink to="/login">
          <button className='hover:cursor-pointer text-[1rem] lg:text-[1.1rem] font-[400]  tracking-[1px]'>Login</button>
        </NavLink>
        </div>):(<div className=' hover:cursor-pointer '>
        
        <div >
    <img src={user?.image} alt="User Image" className='h-10 w-10 rounded-full'  onClick={()=>{setClicked(!Clicked)}}/>

        </div>

 {Clicked && <button className='hover:cursor-pointer absolute right-[5vw] top-16  bg-[#413f3f8e] px-4 py-3 rounded-md text-[1.1rem] font-[400] tracking-[1px]' onClick={handleLogout}>LogOut</button>}
        </div>)
        }
        
    </div>
  )
}

export default Header
