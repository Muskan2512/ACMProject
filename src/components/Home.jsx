import React from 'react'
import Main from './Main'
import Blogs from "./Blogs"
import Footer from "./Footer"
const Home = () => {
  return (
    <div className='h-fit min-h-[100vh] flex flex-col gap-5 '>
      <Main/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default Home
