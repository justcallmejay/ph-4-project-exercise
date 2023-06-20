import React from 'react';
import { Link } from 'react-router-dom';
import { TfiWrite } from 'react-icons/tfi';
import { BiRun } from 'react-icons/bi';
import { CgTrack } from 'react-icons/cg';
import './Home.css'

function Home() {
    return(
        <div className='home rc'>
            <div className='home-container rc'>
                <div className='home-login-container cc'>
                    <div className='home-welcome'>
                        <h3>Welcome</h3>
                    </div>
                    <Link to='/login'>
                        <button className='home-btn'>Login</button>
                    </Link>
                    <Link to='/signup'>
                        <button className='home-btn'>Sign Up</button>
                        </Link>
                </div>
                <div className='home-title-container cc'>
                    <div className='home-title rc'>
                        <h1>Exercise App</h1>
                    </div>
                    <div className='home-desc rc'>
                        <p>Select exercises. Submit. Track.</p>
                    </div>
                    <div className='home-img-container fl'>
                        <div className='home-img-box cc'>
                        <TfiWrite size={70}/>
                        <p>Choose today's exercises.</p>
                        </div>
                        <div className='home-img-box cc'>
                        <BiRun size={70}/>
                        <p>Perform each as you go!</p>
                        </div>
                        <div className='home-img-box cc'>
                        <CgTrack size={70}/>
                        <p>Monitor the progress of your fitness levels!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-container fl'>
                <ul className='fl'>
                    <li>Site</li>
                    <li>Contact</li>
                    <li>Order</li>
                </ul>
            </div>
        </div>
    )
}

export default Home;