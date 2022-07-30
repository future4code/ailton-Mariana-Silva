import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "../components/Header/Header"
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostCommentPage from "../pages/PostPage/PostCommentPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<div><Header/> <FeedPage/></div>} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="post/:id" element={<div><Header/> <PostCommentPage/></div>} />
        <Route path="cadastro" element={<div><Header/> <SignUpPage/></div>} />
        <Route path="*" element={<ErrorPage />} />
      
      </Routes>
    </BrowserRouter>
  )
}

export default Router