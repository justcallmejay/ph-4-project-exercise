import React from 'react';
import { BsCheck2 } from 'react-icons/bs'
import { BsXLg } from 'react-icons/bs'

function Confirm( { quote, handleUpdateChange, handleEdit, handleChange, formData, handleArg } ) {
    return(
        <>
        <div className='profile-stat rc'>
            <h4 className='pr-label fl'>{quote}</h4>
                 
                <div className='pr-input rc'>
                {handleArg === 'weight' ?
                    <input type='number' name={handleArg} value={formData} onChange={handleChange} />
                    :
                    <input className='pr-input-field' type='text' name={handleArg} value={formData} onChange={handleChange} placeholder=''/>}
                </div>
                <div className='pr-edit cc'>
                    <div className='pr-btn cc'>
                        <BsCheck2 onClick={handleUpdateChange} size={20}/>
                    </div>
                    <div className='pr-btn cc'>
                        <BsXLg onClick={() => handleEdit('')} size={15}/>
                   </div>
                </div>
        </div>
        </>
    )
}

export default Confirm;