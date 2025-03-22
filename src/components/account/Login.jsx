import React from 'react'
import "./Login.scss"
export default function login() {
  return (
    <div className='login'>
        <h1 className='login__title'>Login</h1>
        <input className='login__input' placeholder='EMAIL'></input>
    </div>
  )
}
