import React from 'react'
import Blog from '../components/Blog'

const Blogs = ({ blogs, user }) => {

  const handleLogout = () => {
    window.localStorage.clear()
    window.location.reload()
  }

  return (
    <div>
      <h2>blogs</h2>
      <p>
        {user.name} logged in
        <button type='botton' name='Logout' onClick={() => handleLogout()}>Logout</button>
      </p>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default Blogs