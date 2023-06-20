import React from 'react';

function Edit( { handleArg, quote, currentUser, displayEdit, handleMouseOver, handleEdit } ) {

    console.log(typeof(handleArg))

    return(
    <div className='profile-confirm-container rc' onMouseEnter={() => handleMouseOver(handleArg)}>
        <div className='profile-stat-edit fl' >
            <div className='profile-input-container rc'>
                <h3 className='pr-label fl'>{quote}</h3>
                <h3 className='pr-input fl'>{currentUser}</h3>
            </div>
        </div>
        <div className='pr-edit cc'>
        {displayEdit === handleArg ? 
            <h6  onClick={() => handleEdit(handleArg)}>edit</h6> : "" }
        </div>
    </div>
    )
}

export default Edit;