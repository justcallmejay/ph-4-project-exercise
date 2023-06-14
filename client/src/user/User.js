import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FaRunning, FaCalendarAlt } from 'react-icons/fa' 
import { ImProfile } from 'react-icons/im'
import './User.css'
import UserLink from './UserLink';

function User( { currentUser, setCurrentUser } ) {

    console.log(currentUser)

    const history = useHistory()

    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(res => {
            if (res.ok) {
                setCurrentUser(false)
                history.push('/')
            }
        })
    }

    return(
        <div className='user rc'>
            <div className='user-container'>
                <div className='user-profile-container fl'>
                    <div className='user-img-container rc'>
                        <div className='user-img fl'>
                            <div className='user-img-head'></div>
                            <div className='user-img-body'></div>
                        </div>
                    </div>
                    <div className='user-name fl'>
                        <div className='user-stats'>
                            <h4>{currentUser.username}</h4>
                            <p>Name: {currentUser.name}</p>
                            <p>Weight: {currentUser.weight}</p>
                        </div>
                        <div className='user-logout fl'>
                            <p onClick={handleLogout}>Logout</p>
                        </div>
                    </div>
                </div>
                <div className='user-activity-container fl'>
                    <Link to={`/user/${currentUser.username}/start-exercise`}>
                        <UserLink 
                        icon={FaRunning}
                        title={'Begin Exercise:'}
                        desc={
                        'Start your exercise routine by selecting the exercises as you go.  If you would like to perform the exercise more than once, select that exercise again.'}
                        />
                    </Link>
                    <Link to={`/user/${currentUser.username}/progress`}>
                        <UserLink 
                        icon={FaCalendarAlt}
                        title={'View Progress:'}
                        desc={'See how much you have progressed throughout your exercising journey.'}
                        />
                    </Link>
                    <Link to={`/user/${currentUser.username}/profile`}>
                        <UserLink 
                        icon={ImProfile}
                        title={'Profile:'}
                        desc={'Edit your profile.'}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default User;