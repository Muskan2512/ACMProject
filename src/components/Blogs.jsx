import React, { useContext,useState,useEffect } from 'react'
import Blog from './Blog'
import { ContextStore } from '../store/ContextStore'
import axios from 'axios'
import Tab from './Tab'

const Blogs = () => {

  const {token}=useContext(ContextStore)
  const [blogs,setBlogs]=useState([])

  const getAllBlogs=async()=>{
    const url="http://localhost:3000/api/v1/blog/allblogs"
    try{
      const response=await axios.get(url);
      // console.log("All blogs are:",response.data.data);
      setBlogs(response.data.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getAllBlogs()
  },[token])

  return (
    <div className=" w-[80%]  mx-auto mt-4 mb-4">
    <Tab/>

    <div className='flex mx-auto gap-4 flex-wrap mt-4'>
      {
        blogs.length==0?<div className='text-[2rem] text-gray-600 mx-auto'><p>No Blogs yet</p><p>Create Your Blog</p></div>:blogs.map((blog,i)=>{
  return <Blog key={i} blog={blog}/>
})
      }
    </div>
    </div>
  )
}

export default Blogs

{/* blogs.map((blog,i)=>{
  return <Blog key={i}/>
}) */}