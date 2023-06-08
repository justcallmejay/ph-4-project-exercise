import React from 'react';
import { Link } from 'react-router-dom'
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
                        <h1>Some Exercise App</h1>
                    </div>
                    <div className='home-desc rc'>
                        <p>Select a workout. Submit. Finish.</p>
                    </div>
                    <div className='home-img-container fl'>
                        <div className='home-img-box'>
                            img
                        </div>
                        <div className='home-img-box'>
                            img
                        </div>
                        <div className='home-img-box'>
                            img
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