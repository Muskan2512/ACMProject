import React from 'react'
import {useState,useContext,useEffect} from "react"
import {ContextStore} from "../store/ContextStore"
import axios from 'axios'
import Blog from "./Blog"
import Tab from "./Tab"

const MyBlogs = () => {
  const {token}=useContext(ContextStore)
  const [myblogs,setmyBlogs]=useState([])

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
      console.log("My blogs are:",response.data.data[0].blogs,typeof(response))
      setmyBlogs(response.data.data[0].blogs)
    }catch(err){
      console.log(err)
    }
  }

  
  useEffect(()=>{
    getMyBlogs()
  },[token])

  return (
    <div className=" w-[80%]  mx-auto mt-4 mb-4">
    <Tab/>

    <div className='flex mx-auto gap-4 flex-wrap mt-4'>
      {
        myblogs.length==0?<div className='text-[2rem] text-gray-600 mx-auto'><p>No Blogs yet</p><p>Create Your Blog</p></div>:myblogs.map((blog,i)=>{
  return <Blog key={i} blog={blog}/>
})
      }
    </div>
    </div>
  )

}

export default MyBlogs
