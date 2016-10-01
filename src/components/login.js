import React, { PropTypes } from 'react'

import '../styles/login.scss'

const Login = ({ login }) => {
  let emailInput, passwordInput

  return (
    <form className="login" onSubmit={e => {
      e.preventDefault()
      loginUser(login, emailInput, passwordInput)
    }}>
      <input type="text" className="input" placeholder="Email" ref={c => {
        emailInput = c
      }}/>
      <input type="password" className="input" placeholder="Wachtwoord" ref={c => {
        passwordInput = c
      }}/>
      <button type="submit" className="submit login__submit">Inloggen</button>
    </form>
  )
}

function loginUser(login, emailInput, passwordInput) {
  const email = emailInput.value
  const password = passwordInput.value

  if (email.trim() !== '' && password.trim() !== '') {
    login(email, password)
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
}

export default Login
