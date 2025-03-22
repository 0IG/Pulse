import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Index.scss'

function Index() {
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
    <div className='Latest'>
        <h1 className='Latest__title'>
            Latest Breached Company
        </h1>
        {latestBreach && (
            <div className='Latest__container'>
                <h2 className='Latest__name'>{latestBreach.Name}</h2>
                <p className='Latest__description'>{latestBreach.Description}</p>
            </div>
        )}
    </div>
  )
}

export default Index