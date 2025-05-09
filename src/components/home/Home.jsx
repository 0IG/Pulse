import React, { useState } from 'react';
import axios from 'axios';
import './Home.scss';

export default function Home() {
  const [input, setInput] = useState('');
  const [breaches, setBreaches] = useState([]);
  async function checkEmailBreach() {
    setBreaches([]);
    
    try {
      const response = await axios.post('http://localhost:8000/api/check_breach', {
        email: input,
      });
  
      if (response.data.length === 0) {
        setBreaches([]); // no breaches
      } else {
        setBreaches(response.data); // breach data
      }
    } catch (err) {
      if (err.response?.status === 404) {
        setBreaches([]); // no breaches found
      } else {
        console.error('Something went wrong. Please try again.');
        console.log(err);
      }
    }
  }
  

  const validation = (e) => {
    e.preventDefault();

    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    if (validateEmail(input)) {
      checkEmailBreach();
    } else {
      console.log('Invalid email address');
    }
  };

  

  function displayBreachInfo(breach){
    let breachDate = ''
    if (breach.BreachDate){
      breachDate = breach.BreachDate
    } else {
      breachDate = 'No date found.'
    }
  }


  return (
    <div className='Home'>
      <div className='Home__container'>
        <form className='Home__form' onSubmit={validation}>
          <input
            className='Home__input'
            type='text'
            placeholder='GOT PWN ?'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>

          {breaches.length > 0 && (
            <div className='Home__results'>
              <h2>⚠️ Breaches Found</h2>
              <ul>
                {breaches.map((breach) => (
                  <li key={breach.Name}>
                    <strong>{breach.Name}</strong> 
                    <strong>{displayBreachInfo}</strong>
z                    <br />
                  </li>
                ))}
                
              </ul>
              </div>
            )}
      </div>
    </div>
  );
}
