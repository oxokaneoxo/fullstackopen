import React from 'react'
import Blog from '../components/Blog'
import BlogForm from './BlogForm'
import Notification from './Notification'

const Blogs = ({ blogs, user, setBlogs, setNotificationMessage, notificationMessage, errorMessage }) => {

  const handleLogout = () => {
    window.localStorage.clear()
    window.location.reload()
  }

  return (
    <div>
      <h2>blogs</h2>
      <Notification notificationMessage={notificationMessage} errorMessage={errorMessage}/>
      <p>
        {user.name} logged in
        <button type='botton' name='Logout' onClick={() => handleLogout()}>Logout</button>
      </p>
      <BlogForm blogs={blogs} setBlogs={setBlogs} setNotificationMessage={setNotificationMessage}/>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default Blogs