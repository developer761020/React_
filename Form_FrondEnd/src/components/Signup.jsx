import validation from './SignupValidation'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

const Signup = () => {

  const [values,setValues]=useState({
    name:'',
    email:'', 
    password:''
  });
  const navigate=useNavigate();
  const [error,setError]=useState({})

  const submit=(event)=>{
   event.preventDefault();
   setError(validation(values))
   if(error.name==="" && error.email==="" && error.password===""){
    console.log(values)
    axios.post('http://localhost:8081/signup',values)
    .then(res=>{
      navigate('/login')
    })
    .catch(err=> console.log(err));
   }
  }

  const inputs=(event)=>{
   setValues(prev =>({...prev,[event.target.name]:[event.target.value]}))
  }

  return (
    <div>
        <form action='' onSubmit={submit} >
          <br />{error.name&&<span>{error.name}</span>}<br/>
          Name <input type='text' name='name'  onChange={inputs}></input><br />
          {error.email&&<span>{error.email}</span>}<br/>
          Email: <input type='email' name='email'  onChange={inputs}></input><br />
          {error.password&&<span>{error.password}</span>}<br/>
          password: <input type='text' name='password'  onChange={inputs}></input><br />
          <button type='submit'>Save</button>
        </form >
        <p><Link style={{textDecoration:'none'}} to="/"><strong>Home</strong></Link></p><br />
    </div>
  )
}

export default Signup