import React from 'react'
import SignUpForm from '../components/SignUpForm'
import SignIn from '../components/SignIn'
function AuthPage({ setUser }) {
  return (
    <div>
      <h1 className='mt-4'>Welcome to MOBGaming App</h1>
      <SignUpForm setUser={setUser} />
      <br />
      <SignIn setUser={setUser} />
    </div>
  )
}

export default AuthPage