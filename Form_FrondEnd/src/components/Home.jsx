import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        
        <p><Link style={{textDecoration:'none'}} to="/login"><strong>Login</strong></Link></p><br />
        <h3>Welcome To Guvi</h3>
        <p><Link style={{textDecoration:'none'}} to="/sign"><strong>Sign up</strong></Link></p>
    </div>
  )
}

export default Home