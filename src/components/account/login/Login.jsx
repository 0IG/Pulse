import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router'
import "./Login.scss"
export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleRedirect = () => {
        e.preventDefault()
        navigate('/signup')
    }
  return (
    <div className='login'>
        <form className='login__form'>
        <h1 className='login__title'>Login</h1>
        <input className='login__email' placeholder='EMAIL'onChange={(e) => setEmail(e.target.value)}></input>
        <input className='login__password' placeholder='PASSWORD' onChange={(e) => setPassword(e.target.value)}></input>
        <p className='login__signUpNav'>
          <Link to="/signup">New Here? Sign Up!</Link></p>
        </form>
    </div>
  )
}
