import React, { useState } from 'react'
import validation from './LoginValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';


const Login = () => {

  const [values,setValues]=useState({
    email:'',password:''
  });
  const navigate=useNavigate();
  const [error,setError]=useState({})

 
  const submit=(event)=>{
   event.preventDefault();
   setError(validation(values))
   if(error.email==="" && error.password===""){
    axios.post('http://localhost:8081/login',values)
    .then(
      res=>{
        if(res.data==="Success"){
          navigate('/profile')
        }else{
          alert("No records found");
        }
      })
      .catch(err=>console.log(err));
   }
  }

  const inputs=(event)=>{
   setValues(prev =>({...prev,[event.target.name]:[event.target.value]}))
  }

  return (
    <div >
        <form action="" onSubmit={submit} className='login'>
          {error.email&&<span>{error.email}</span>}<br/>
            Email <input type='email' name='email' onChange={inputs}></input>
            <br />
            {error.password&&<span>{error.password}</span>}<br/>
            Password <input type='password' name='password' onChange={inputs}></input><br/><br />
            <button type='submit'>Login</button>
        </form>
        <p><Link style={{textDecoration:'none'}} to="/sign">Signup</Link></p><br />

    </div>
  )
}

export default Login