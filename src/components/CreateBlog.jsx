import React from 'react'
import {useState,useContext} from "react"
import { ContextStore } from '../store/ContextStore'
import Tab from './Tab'
import axios from 'axios'
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
const navigate=useNavigate();
  const {token}=useContext(ContextStore)
    const [formData, setFormData] = useState({
      heading: "",
      desc: "",
      date: "",
      // coverImage: null,
    });
  
    const handleChange = (e) => {
      const { name, value, type, files } = e.target;
      setFormData({
        ...formData,
        [name]: type === "file" ? files[0] : value,
      });
    };
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      const url="http://localhost:3000/api/v1/blog/create"

      const data=formData;
      try{
        // console.log(formData);
        const response=await axios.post(
          url,
          data,
          {headers:{'Authorization':`Bearer ${token}`}},
        );
        // console.log(response)
        
        toast.success("Blog created successfully");
        navigate("/dashboard/my-blogs")

      }catch(err){
        console.log("Error occurred",err)
        toast.error("Error occured");
        setFormData({
          heading: "",
          desc: "",
          date: "",
        })

      }
      // Here, you would send formData to the backend or handle it as required.  
    };
  
    return (

<div className='w-[80%] mx-auto mt-4 mb-4 '>
<Tab/>

      <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Create Blog Post</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* heading */}
          <div>
            <label htmlFor="heading" className="block text-gray-700 font-medium">Title</label>
            <input
              type="text"
              id="heading"
              name="heading"
              value={formData.heading}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the heading"
              required
            />
          </div>
  
          {/* Description */}
          <div>
            <label htmlFor="desc" className="block text-gray-700 font-medium">Description</label>
            <textarea
              id="desc"
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the description"
              rows="4"
              required
            />
          </div>
  
          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-gray-700 font-medium">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
  
          
  
          {/* Cover Image */}
          {/* <div>
            <label htmlFor="coverImage" className="block text-gray-700 font-medium">Cover Image</label>
            <input
              type="file"
              id="coverImage"
              name="coverImage"
              onChange={handleChange}
              className="w-full"
            />
          </div> */}
  
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-md  focus:ring-2 "
          >
            Submit Post
          </button>
        </form>
      </div>
</div>

    
  )
}



export default CreateBlog
