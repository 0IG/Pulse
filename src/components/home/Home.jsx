import React from 'react'
import './Home.scss'
import { RiUserSearchFill } from "react-icons/ri";

export default function Home() {
  return (
    <div className='Home'>
        <div className='Home__container'>
            <input className='Home__input' type="text" placeholder='GOT PWN ?'/>
            {/* <button className='Home__button' type='submit'>
                <RiUserSearchFill className='Home__icon'/>
            </button> */}
        </div>
    </div>
  )
}
