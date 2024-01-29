import React from 'react'
import {Link} from 'react-router-dom';


const Profile = () => {
  return (
    <div>
        <header>
           <h4>Welcome to Guvi</h4>
        </header>
        <p><Link style={{textDecoration:'none'}} to="/"><strong>Logout</strong></Link></p><br />

    </div>
  )
}

export default Profile