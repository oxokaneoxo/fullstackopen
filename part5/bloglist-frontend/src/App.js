import { useState, useEffect } from 'react'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import Blogs from './components/Blogs'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [notificationMessage, setNotificationMessage] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])



  return (
    <div>

      {user === null &&
        <LoginForm 
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          user={user}
          setUser={setUser}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          notificationMessage={notificationMessage}
          setNotificationMessage={setNotificationMessage}
        />}
      {user !== null &&
        <Blogs
          blogs={blogs}
          user={user}
          setBlogs={setBlogs}
          notificationMessage={notificationMessage}
          setNotificationMessage={setNotificationMessage}
          errorMessage={errorMessage}
        />}
    </div>
  )
}

export default App