import React, { useState } from 'react';
import './Set.css'

function Set( { selectExercise, formData, handleChange, setEraseInput, eraseInput } ) {

    function handleEraseCheckBox(e) {
        setEraseInput(e.target.checked)
    }

    console.log(typeof(formData.intensity))


    return(
        <>
            <div className='selected-exercise-goal rc'>
                <div className='selected-exercise-fields fl'>
                    <h5>{selectExercise.name} ({selectExercise.kind})</h5>
                </div>
                <div className='selected-exercise-fields-input fl'>
                    <h5>Weight:</h5>
                    <input className='start-exercise-input' name='weight' type='number' min='0' max='2000' value={formData.weight} onChange={handleChange}/>
                    <h5>Reps:</h5>
                    <input className='start-exercise-input' name='reps' type='number' min='0' max='100' value={formData.reps} onChange={handleChange}/>
                </div>
                <div className='erase-checkbox cc'>
                    <input type='checkbox' onChange={(handleEraseCheckBox)} checked={eraseInput}/>
                    <h6>Clear?</h6>
                </div>
            </div>
            {formData.weight > 0 && formData.reps > 0 ?
            <>
                <div className='selected-exercise-goal result fl'>
                    <div className='reps-performed-container rc'>
                        <h5>Reps Performed:</h5><input className='start-exercise-input' name='reps_completed' type='number' min='0' max='100' value={formData.reps_completed} onChange={handleChange}/>
                    </div>
                    <div className='perceived-difficulty-container rc'>
                        <h5>RPE:</h5>
                        <select name='intensity' onChange={handleChange}>
                            <option value=''></option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='8.5'>8.5</option>
                            <option value='9'>9</option>
                            <option value='9.5'>9.5</option>
                            <option value='10'>10</option>
                            <option value='10.5'>10.5</option>
                        </select>
                    </div>
                </div>
                <div className='selected-exercise-submit cc'>
                    <button>Submit</button>
                </div>
            </> 
            : ""}
        </>
    )
}

export default Set;