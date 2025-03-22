import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './latestBreach.scss'

function latestBreach() {
    const baseUrl = import.meta.env.VITE_BASE_URL
    const [latestBreach, setLatestBreach] = useState(null);
    
    async function getLatestBreachedCompany(){
        try{
            const response = await axios.get(`${baseUrl}/latestbreach`);
            setLatestBreach(response.data);
        }catch(error){
            console.error('Error fetching latest breached company:', error);
        }
    }

    useEffect(() => {
        getLatestBreachedCompany();
    }, []);
  return (
    <div className='latest'>
        <h1 className='Latest__title'>
            Latest Breached Company
        </h1>
        {latestBreach && (
            <div className='latest__container'>
                <h2 className='latest__name'>{latestBreach.Name}</h2>
                <p className='latest__description'>{latestBreach.Description}</p>
            </div>
        )}
    </div>
  )
}

export default latestBreach