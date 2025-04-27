import React, {useEffect, useState} from 'react'
import "./SignUp.scss"
export default function SignUp() {
    // Library
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    //React
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <div className='signup'>
    <form className='signup__form'>
    <h1 className='signup__title'>SIGN UP</h1>
    <input className='signup__email' placeholder='EMAIL'onChange={(e) => setEmail(e.target.value)}></input>
    <input className='signup__password' placeholder='PASSWORD' onChange={(e) => setPassword(e.target.value)}></input>
    </form>
</div>
  )
}
