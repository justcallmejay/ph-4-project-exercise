import React from 'react';
import { BsCheck2 } from 'react-icons/bs'
import { BsXLg } from 'react-icons/bs'

function Confirm( { quote, handleUpdateChange, handleChange, formData, handleArg, cancelEdit, errors } ) {

    return(
        <>
        <div className='profile-confirm-container rc'>
            <div className='profile-stat cc'>
                <div className='profile-input-container-confirm rc'>
                    <h4 className='pr-label fl'>{quote}</h4>
                    <div className='pr-input rc'>
                    {handleArg === 'weight' ?
                        <input type='number' name={handleArg} value={formData} onChange={handleChange} />
                        :
                        <input className='pr-input-field' type='text' name={handleArg} value={formData} onChange={handleChange} placeholder=''/>}
                    </div>
                </div>
                <div className='profile-error-msg rc'>
                    {errors ? 
                        <h5>{errors[handleArg]}</h5>
                        : ""}
                </div> 
            </div>
            <div className='pr-edit cc'>
                <div className='pr-btn cc'>
                    <BsCheck2 onClick={() => handleUpdateChange(handleArg)} size={20}/>
                </div>
                <div className='pr-btn cc'>
                    <BsXLg onClick={() => cancelEdit(handleArg)} size={15}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Confirm;