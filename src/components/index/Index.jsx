import React from 'react'
import axios from 'axios'
export default function Index() {
    const axios = require('axios');

    handleLatestBreach(){
        axios.get('https://haveibeenpwned.com/api/v3/latestbreach')
    }
  return (
    <div>Index</div>
  )
}
