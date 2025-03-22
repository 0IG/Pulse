import React, {useState} from 'react'
import { useNavigate } from 'react-router'
import "./Login.scss"
export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleRedirect = () => {
        e.preventDefault()
        navigate('/signup')
    }
  return (
    <div className='login'>
        <form className='login__form'>
        <h1 className='login__title'>Login</h1>
        <input className='login__email' placeholder='EMAIL'></input>
        <input className='login__password' placeholder='PASSWORD'></input>
        </form>
    </div>
  )
}
