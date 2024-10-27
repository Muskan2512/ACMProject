import Home from "./components/Home"

import { Route, Routes } from "react-router-dom"
import "./App.css"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Header from "./components/Header"
import Profile from "./components/Profile"
import Error from "./components/Error"
import CreateBlog from "./components/CreateBlog"
import { useState } from "react"
import { ContextStore } from "./store/ContextStore"
import Blogs from "./components/Blogs"
import MyBlogs from "./components/MyBlogs"
import PrivateRoute from "./components/PrivateRoute"
import DeleteBlog from "./components/DeleteBlog"
function App() {
  const val1 = localStorage.getItem("token")
  const val2 = localStorage.getItem("user")
  // console.log("token is:",val1)
  const [token, setToken] = useState(JSON.parse(val1))
  const [user, setUser] = useState(JSON.parse(val2))

  return <div className="h-fit min-h-[100vh]">
    <ContextStore.Provider value={{
      token: token,
      user: user,
      setToken,
      setUser
    }}>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* <PrivateRoutes></PrivateRoutes> */}

        {/* <Route path="/dashboard/profile" element={<Profile/>}/> */}
        <Route 
        path="/dashboard/create-blog" 
        element={
        <PrivateRoute>
          <CreateBlog />
        </PrivateRoute>
        } />
        <Route
          path="/dashboard/all-blogs"
          element={
            
              <Blogs />
           
          }
        />
        <Route
          path="/dashboard/delete-blog"
          element={
            <PrivateRoute>
              <DeleteBlog />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/my-blogs"
          element={
            <PrivateRoute>
              <MyBlogs />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

      </Routes>

    </ContextStore.Provider>
  </div>
}

export default App