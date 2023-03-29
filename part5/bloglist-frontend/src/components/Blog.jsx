import { useState } from 'react'
import './blog.css'

const Blog = ({ blog, user, addLike }) => {
  const [detailsVisible, setDetailsVisible] = useState(false)

  const hideWhenVisible = { display: detailsVisible ? 'none' : '' }
  const showWhenVisible = { display: detailsVisible ? '' : 'none' }

  return (
    <div className='blog_container'>
      <div style={hideWhenVisible}>
        {blog.title} by {blog.author}
        <button onClick={() => setDetailsVisible(true)} className='blog_button' >view</button>
      </div>
      <div style={showWhenVisible} className='extra_details'>
        {blog.title} by {blog.author}
        <button onClick={() => setDetailsVisible(false)} className='blog_button' >hide</button>
        <p>Url for blog {blog.url}</p>
        <p>Likes {blog.likes} <button onClick={() => addLike(blog)}>like</button></p>
        {blog.user.username
          ? <p>Added by {blog.user.username}</p>
          : <p>Added by {user.username}</p>
        }
      </div>
    </div>
  )
}

export default Blog