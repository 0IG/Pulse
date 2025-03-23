import React, { useState } from 'react';
import axios from 'axios';
import './Home.scss';

export default function Home() {
  const [input, setInput] = useState('');

  async function checkEmailBreach() {
    try {
      const response = await axios.post('http://localhost:8000/api/check-breach', {
        email: input,
      });
      console.log('Breaches found:', response.data);
    } catch (error) {
      console.error('Error:', error);
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
      </div>
    </div>
  );
}
