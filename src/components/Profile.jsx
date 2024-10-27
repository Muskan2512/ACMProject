import React, { useContext,useState } from 'react'
import { ContextStore } from '../store/ContextStore'
import Tab from "./Tab"

const Profile = () => {
  let {user}=useContext(ContextStore)
  if(!user){
    const saved = localStorage.getItem("user");
    user = JSON.parse(saved);
  }
  // console.log(user)

  return (
    <div className='w-[100%]'>


<div className=" w-[80%]  mx-auto mt-4 ">
  
  <Tab />
  <div className=" border-[1px] border-gray-400  p-4 flex flex-col justify-between  leading-normal rounded-lg ">
    
    <div className="flex md:flex-row  flex-col items-center justify-evenly rounded-lg  ">
      <img className="w-12 h-12 rounded-full mr-4" src={user.image} alt="Avatar of Jonathan Reinink"/>

      <div className="mb-8  h-full flex flex-col items-center justify-center">
      
      <div className="text-gray-900 font-bold text-2xl ">{user.firstName} {user.lastName} </div>
      <p className="text-gray-700 text-[1.2rem] text-base">{user.email}</p>
    </div>

      <div className="text-[1.1rem]">
        <p className="text-gray-900 leading-none">Author:{user.firstName} {user.lastName}</p>
        <p className="text-gray-600">Dec 5 2024</p>
      </div>
    </div>
  </div>
    </div>

    </div>
  )
}

export default Profile
