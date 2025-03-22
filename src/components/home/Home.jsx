import React from 'react'
import './Home.scss'
import Index from '../index/Index.jsx'
import { RiUserSearchFill } from "react-icons/ri";

export default function Home() {
  return (
    <div className='Home'>
        <div className='Home__container'>
            <input className='Home__input' type="text" placeholder='GOT PWN ?'/>
        </div>
    </div>
  )
}
