import React, { useState } from 'react'
import { SiThemoviedatabase } from 'react-icons/si'
import Navbar from '../Navbar/Navbar'
import AuthService from '../Services/AuthService';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleLogin = event => {
        event.preventDefault();
        AuthService.login(email, password).then(
            () => {
                window.location.href="/profile";
            }).catch(error => alert("Wrong username or password"));
    }

    return(
        <>
            
                <div className='d-flex flex-column w-100 justify-content-center align-items-center pb-5' style={{color:'black', background:'white', paddingTop:80}}>
                    <SiThemoviedatabase className="mt-5 mb-3 logo-icon" color='crimson'/>
                    <form style={{padding:30, borderRadius:5, border:'1px solid gray'}} onSubmit={handleLogin}>
                        <h3>Sign in</h3>
                        <label for="email">Email</label>
                        <input className='form-control' type='text' id='email' name='email' onChange={handleEmail}></input>
                        <label for="password">Password</label>
                        <input className='form-control' type='password' id='password' name='password' onChange={handlePassword}></input>
                        <button type='submit' className='form-control mt-4' style={{background:'#F1C860'}}>Sign-in</button>

                        <div className='line mt-4 mb-3'></div>
                        <p>New to TMDb?</p>
                        <a className='form-control text-center' href='/registration' style={{border:'1px solid gray',background:'#ECEEF1',borderRadius:5, textDecoration:'none',color:'black', padding:'5px 10px'}}> Sign Up</a>
                    </form>
                </div>
            
        </>
    )   
}

export default Login