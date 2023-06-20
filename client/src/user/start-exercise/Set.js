import React, { useState } from 'react';
import Timer from './Timer';
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { BsQuestion } from 'react-icons/bs'
import './Set.css'

function Set( { seconds, setSeconds, selectExercise, formData, handleChange, setEraseInput, eraseInput, errors, handleToggleDisplay, currentUser } ) {

    const numbers = ['7', '8', '8.5', '9', '9.5', '10', '10.5']


    const [ toggleDisplay, setToggleDisplay ] = useState(false)
    const [ radioSelect, setRadioSelect ] = useState(null)

    function handleEraseCheckBox(e) {
        setEraseInput(e.target.checked)
    }

    function toggleExplanation() {
        setToggleDisplay(toggleDisplay => !toggleDisplay)
    }

    const defaultLimit = selectExercise.kind === 'Bodyweight' ? currentUser.weight : 0
    const defaultMax = selectExercise.kind === 'Bodyweight' ? currentUser.weight : 1000


    const readOnly = formData.weight === currentUser.weight && selectExercise.kind === 'Bodyweight' && radioSelect === 'bw' ? true : false

    return(
        <>
            <div className='selected-exercise-goal rc'>
                <div className='selected-exercise-fields fl'>
                    <h5>{selectExercise.name} ({selectExercise.kind})</h5>
                    {selectExercise.kind === 'Bodyweight' ? 
                    <>
                    <input 
                        type='radio' 
                        value='bw' 
                        checked={radioSelect === 'bw'} 
                        onChange={() => setRadioSelect('bw')}
                    />
                    <h6>BW</h6>
                    <input 
                        type='radio' 
                        value='weight' 
                        checked={radioSelect === 'weight'} 
                        onChange={() =>  setRadioSelect('weight')}
                    />
                    <h6>wt.</h6>
                    </>
                     : ""}
                </div>
                <div className='selected-exercise-fields-input fl'>
                    <h5>Weight:</h5>{selectExercise.kind === 'Bodyweight' ? <BsQuestion onClick={toggleExplanation}/> : ""}
                    {radioSelect === 'bw' ?
                    toggleDisplay ? 
                    <div className='weight-display-container fl'>
                        <h6>BW is a reference to your bodyweight.  Click up or down to enter weight.</h6><button onClick={toggleExplanation}>Close</button>
                    </div> : ""
                     :
                    toggleDisplay ? 
                     <div className='weight-display-container fl'>
                        <h6>wt. refers to additional weight used when performing the exercise (eg: weight vest)</h6><button onClick={toggleExplanation}>Close</button>
                    </div> : ""
                     }
                    <input className='start-exercise-input' name='weight' type='number' min={radioSelect === 'bw' ? defaultLimit : 0} max={radioSelect === 'bw' ? defaultMax : 1000} value={formData.weight} onChange={handleChange} readOnly={readOnly}/>
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
                        {selectExercise.isometric? 
                            <Timer seconds={seconds} setSeconds={setSeconds}/>
                         : ""}
                    <div className='reps-performed-container rc'>
                        <h5>Reps Performed:</h5><input className='start-exercise-input' name='reps_completed' type='number' min='0' max='100' value={formData.reps_completed} onChange={handleChange}/>
                    </div>
                    <div className='perceived-difficulty-container rc'>
                        <h5>RPE:</h5><HiOutlineInformationCircle onClick={handleToggleDisplay}/>
                        <select name='intensity' onChange={handleChange}>
                            <option value=''></option>
                            {numbers.map(num =>
                            <option value={num}>{num}</option>
                            )}
                        </select>
                    </div>
                </div>
                <div className='selected-exercise-submit fl'>
                    {errors ? 
                    <>
                    <h6>{errors.intensity}</h6>
                    <h6>{errors.percent_completed}</h6>
                    </>
                    : ""}
                    <button>Submit</button>
                </div>
            </> 
            : ""}
        </>
    )
}

export default Set;