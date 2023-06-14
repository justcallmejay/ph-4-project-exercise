import React from 'react';


function UserLink( { icon: Icon, title, desc } ) {
    return (
    <div className='user-exercise rc'>
        <div className='user-exercise-img-container rc'>
            <div className='user-exercise-img rc'>
                <Icon size={100}/>
            </div>
        </div>
        <div className='user-exercise-desc-container rc'>
            <div className='user-exercise-desc cc'>
                <h4>{title}</h4>
                <h6>{desc}</h6>
            </div>
        </div>
    </div>
    )
}

export default UserLink;