import React, { useState } from 'react'
import LatestBreach from '../index/latestBreach/LatestBreach';
import { RiUserSearchFill } from "react-icons/ri";
import axios from 'axios';
import './Home.scss'

export default function Home() {

  const baseUrl = import.meta.env.VITE_BASE_URL
  const baseBreached = import.meta.env.VITE_BASE_BREACHED
  const [breached, setBreached] = useState(null);

  async function checkEmailBreach(email) {
    const encodedEmail = encodeURIComponent(email);
    const url = `https://haveibeenpwned.com/api/v3/breachedaccount/${encodedEmail}`;
  
    try {
      const response = await axios.get(url, {
        headers: {
          'hibp-api-key': import.meta.env.VITE_API_KEY,
          'user-agent': 'Pulse',
        },
        params: {
          truncateResponse: false,
        },
      });
  
      console.log('Breaches found:', response.data);
    } catch (error) {
      if (error.response?.status === 404) {
        console.log('No breach found for this email.');
      } else {
        console.error('Error:', error.response?.status, error.message);
      }
    }
  }

  return (
    <div className='Home'>
        <div className='Home__container'>
            <input className='Home__input' type="text" placeholder='GOT PWN ?' onSubmit={(e) => checkEmailBreach(e.target.value)}/>
        </div>
    </div>
  )
}
