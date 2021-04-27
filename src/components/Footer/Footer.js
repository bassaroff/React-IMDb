import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai'
import { FiTwitch } from 'react-icons/fi'
import { ImTwitch } from 'react-icons/im'
import { SiThemoviedatabase } from 'react-icons/si'
import './Footer.css'
export default function(){
    return(
        <>
        <div className='footer mt-5'>
            <div className="social-link-block">
                <ul className='social-links'>
                     <li className="social-link-item">
                        <a href='#'><AiFillFacebook/></a>
                    </li>
                    <li className="social-link-item">
                        <a href='#'><AiFillInstagram/></a>
                    </li>
                    <li className="social-link-item">
                        <a href='#'><AiFillTwitterSquare/></a>
                    </li>
                    <li className="social-link-item">
                        <a href='#'><FiTwitch/></a>
                    </li>
                    <li className="social-link-item">
                        <a href='#'><AiFillYoutube/></a>
                    </li>
                </ul>
            </div>
            <div className='other-links-block mt-4'>
                <div>
                    <ul className='other-links'>
                        <li className="other-link-item">
                            <a href='#'>Get the IMDb App</a>
                        </li>
                        <li className="other-link-item">
                            <a href='#'>Help</a>
                        </li>
                        <li className="other-link-item">
                            <a href='#'>Site Index</a>
                        </li>
                        <li className="other-link-item">
                            <a href='#'>IMDbPro</a>
                        </li>
                        <li className="other-link-item">
                            <a href='#'>Box Office Mojo</a>
                        </li>
                        <li className="other-link-item">
                            <a href='#'>IMDb Developer</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='other-links-block'>
                <div>
                    <ul className='other-links'>
                        <li className="other-link-item">
                            <a href='#'>Press Room</a>
                        </li>
                        <li className="other-link-item">
                            <a href='#'>Advertising</a>
                        </li>
                        <li className="other-link-item">
                            <a href='#'>Jobs</a>
                        </li>
                        <li className="other-link-item">
                            <a href='#'>Conditions of Use</a>
                        </li>
                        <li className="other-link-item">
                            <a href='#'>Privacy Policy</a>
                        </li>
                        <li className="other-link-item">
                            <a href='#'>Interest-Based Ads</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              <span style={{color:'gray',fontSize:'25px'}}>a</span> <SiThemoviedatabase className='logo-footer ml-4 mr-1'/> <span style={{color:'gray',fontSize:'25px'}}>company</span>
            </div>
            <div className='d-flex justify-content-center align-items-center my-3'>
              <span style={{color:'gray',fontSize:'15px'}}>© 1990-2021 by TMDb.com, Inc.</span>
            </div>
        </div>
            
        </>
    )
}