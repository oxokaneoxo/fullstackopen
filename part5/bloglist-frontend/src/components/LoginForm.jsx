import React from 'react'
import Notification from './Notification'
import loginService from '../services/login'
import blogService from '../services/blogs'

const loginForm = ({ username, setUsername, password, setPassword, user, setUser, errorMessage, setErrorMessage, notificationMessage, setNotificationMessage }) => {

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      setNotificationMessage(`${user.name} logged in`)
      setTimeout(() => {
        setNotificationMessage(null)
      }, 3000);
    } catch (exception) {
      console.log("We get here");
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    }
  }

  return (
    <div>
      <h1>Log in to application</h1>
      <Notification errorMessage={errorMessage} notificationMessage={notificationMessage}/>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default loginForm