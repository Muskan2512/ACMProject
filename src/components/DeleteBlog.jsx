import React from 'react'
import {useState,useContext,useEffect} from "react"
import {ContextStore} from "../store/ContextStore"
import axios from 'axios'
import Tab from "./Tab"
import toast from "react-hot-toast"
const DeleteBlog=()=>{
  const {token,user}=useContext(ContextStore)
  const [myblogs,setmyBlogs]=useState([])
  const [delBlog,setdelBlog]=useState(false);
  const getMyBlogs=async()=>{
    const url="http://localhost:3000/api/v1/blog/myblogs"
    try{
      const response=await axios.get(url,
        {
          headers:{
            "Authorization":`Bearer ${token}`
          }
        }
      );
      // console.log("My blogs are:",response.data.data[0].blogs,typeof(response))
      setmyBlogs(response.data.data[0].blogs)
    }catch(err){
      console.log(err)
    }
  }

  const handleDelete=async(blogId,userId)=>{
    const url=`http://localhost:3000/api/v1/blog/delete`;
    const data={
    userId:userId,
    blogId:blogId
   }
    try{
      console.log(data);
      console.log(blogId,userId)
      const response = await axios.delete(url, {
      data: data,  // Sending data in this field
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
      console.log(response)
      if(!response.status){
        throw new Error(response.message);
      }
      setdelBlog(!setdelBlog)
      let newblogs=myblogs.filter(blog=>{
        blog._id!=blogId
      })
      setmyBlogs(newblogs)
      toast.success("Blog deleted")

    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    getMyBlogs()
  },[token,myblogs])
  return(
    <div className=" w-[80%]  mx-auto mt-4 mb-4 ">
    <Tab/>

    <div className='flex mx-auto gap-4 flex-wrap mt-4'>
      {
        myblogs.length==0?<div className='text-[2rem] text-gray-600 mx-auto'><p>No Blogs yet</p><p>Create Your Blog</p></div>:myblogs.map((blog,i)=>{
  return ( <div key={i} className="max-w-sm rounded overflow-hidden border-[1px] border-[#f1efef] shadow-xl w-[400px] ">
  {/* <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/> */}
  <div className="px-6 py-4 flex flex-col justify-center ">
    <p className="text-gray-500 text-base text-[1rem] leading-[2rem] ">{blog?.date?.split('T')[0]}</p>
    <div className="font-bold text-[1.5rem] leading-[2rem] mb-2 ">{blog?.heading}</div>
    <p className="text-gray-700 text-base text-[1.2rem] leading-[2rem] ">
      {blog?.desc}
    </p>
    <p className='text-gray-700 text-base text-[1.2rem] leading-[2rem] mt-4 font-semibold'>Author:-{blog.author.firstName?blog.author.firstName:user.firstName} {blog.author.lastName?blog.author.lastName:user.lastName}</p>
    <button className='bg-yellow-500 py-2 w-full text-white rounded-md' onClick={()=>{handleDelete(blog._id,user._id)}}>Delete Me</button>
  </div>
</div>)
})
      }
    </div>
    </div>
  )
}
export default DeleteBlog