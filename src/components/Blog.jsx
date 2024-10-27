import React, { useContext } from 'react'
import { ContextStore } from '../store/ContextStore';

const Blog = ({blog}) => {
  const date=blog?.date?.split('T')[0];
  const {user}=useContext(ContextStore)
  return (

    <div className="max-w-sm rounded overflow-hidden border-[1px] border-[#f1efef] shadow-xl sm:w-full md:w-[300px] lg:w-[400px] ">
  {/* <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/> */}
  <div className="px-6 py-4 flex flex-col justify-center ">
    <p className="text-gray-500 text-base text-[1rem] leading-[2rem] ">{date}</p>
    <div className="font-bold text-[1.5rem] leading-[2rem] mb-2 ">{blog?.heading}</div>
    <p className="text-gray-700 text-base text-[1.2rem] leading-[2rem] ">
      {blog?.desc}
    </p>
    <p className='text-gray-700 text-base text-[1.2rem] leading-[2rem] mt-4 font-semibold'>Author:-{blog.author.firstName?blog.author.firstName:user.firstName} {blog.author.lastName?blog.author.lastName:user.lastName}</p>
  </div>
</div>
   
  )
}

export default Blog
