import React from 'react';

function Edit( { handleArg, quote, currentUser, displayEdit, handleMouseOver, handleEdit } ) {

    console.log(typeof(handleArg))

    return(
    <div className='profile-stat fl' onMouseEnter={() => handleMouseOver(handleArg)}>
        <h3 className='pr-label fl'>{quote}</h3>
        <h3 className='pr-input fl'>{currentUser}</h3>
        {displayEdit === handleArg ? 
        <h6 className='pr-edit cc' onClick={() => handleEdit(handleArg)}>edit</h6> : "" }
    </div>
    )
}

export default Edit;