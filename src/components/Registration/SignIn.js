import React from 'react';
import { SiThemoviedatabase } from 'react-icons/si';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function SignIn(){
    return(
        <>
            <div className='container' style={{color:'black', background:'white', paddingTop:80}}>
                <div className='row mt-5 pb-5'>
                    <div className='col-5 d-flex justify-content-center align-items-center'>
                        <div className='d-flex flex-column align-items-center justify-content-center w-50'>
                            <h3 className='text-center mb-4'>Sign in</h3>
                            <Link to='/login' style={{padding:'5px 10px',border:'1px solid gray', borderRadius:5, textDecoration:'none',fontWeight:'bold',color:'black'}}>
                                <SiThemoviedatabase className='mr-2'/>
                                Sign in with TMDb
                            </Link>
                            
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='line w-100'></div>
                                <p style={{margin:0}}>or</p>
                                <div className='line'></div>
                            </div>
                            <Link to='/registration' style={{padding:'5px 10px',border:'1px solid #E4B721',background:'#E4B721', borderRadius:5, fontWeight:'bold', textDecoration:'none', color:'black'}}>
                                Create a New Account
                            </Link>
                            <p className='text-center mt-4'>By signing in, you agree to IMDb's Conditions of Use and Privacy Policy.</p>
                        </div>
                    </div>
                    <div className='col-7'>
                        <h2>Benefits of your free IMDb account</h2>
                        <strong>Personalized Recommendations</strong>
                        <p>Discover shows you'll love.</p>

                        <strong>Your Watchlist</strong>
                        <p>Track everything you want to watch and receive e-mail when movies open in theaters.</p>

                        <strong>Your Ratings</strong>
                        <p>Rate and remember everything you've seen.</p>

                        <strong>Contribute to IMDb</strong>
                        <p>Add data that will be seen by millions of people and get cool badges.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn