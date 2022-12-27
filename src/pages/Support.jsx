import React from 'react';
import NavBar from '../Components/NavBar';

function Support() { 
  return (
    <div className='SupportPage'>
    
      <NavBar/>
      <h1 className='Title'>Support</h1>
      <div className='Questions'>
        <h2>Frequently Asked:</h2>
        <br/>
        <br />
        <h3>How Much is the service?</h3>
        <br />
        <p>We have a total of 3 packages ranging from 199$ to 399$!</p>
        
      </div>

    </div>
  )
}

export default Support;