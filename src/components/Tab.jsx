import React from 'react'
import {Link} from "react-router-dom"
const Tab = () => {
  
  return (
    <div className='w-[100%]'>
      <ul className=" w-[80%]  mx-auto mt-4  flex justify-evenly  flex-wrap text-[1.1rem] font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
    <li className="me-2">
        <Link to={"/dashboard/profile"} className={`inline-block p-4  rounded-t-lg active hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 dark:bg-gray-800 `} >Profile</Link>
    </li>
    <li className="me-2">
        <Link to={"/dashboard/create-blog"}  className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300`} >Create Blog</Link>
    </li>
    <li className="me-2">
        <Link to={"/dashboard/delete-blog"}  className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300" >Delete Blog</Link>
    </li>
    <li className="me-2">
        <Link to={"/dashboard/all-blogs"} className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300" >All Blogs</Link>
    </li>
    <li>
        <Link to={"/dashboard/my-blogs"}  className="inline-block p-4 text-gray-500 rounded-t-lg cursor-pointer dark:text-gray-600 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300" >My Blogs</Link>
    </li>
</ul>
    </div>
  )
}

export default Tab
