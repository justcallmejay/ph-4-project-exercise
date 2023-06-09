import React from 'react';
import './Set.css'

function Set( { selectExercise, formData, handleChange } ) {
    return(
        <>
            <div className='selected-exercise-goal rc'>
                <div className='selected-exercise-fields fl'>
                    <h5>{selectExercise.name}</h5>
                </div>
                <div className='selected-exercise-fields-input fl'>
                    <h5>Weight:</h5>
                    <input className='start-exercise-input' name='weight' type='number' min='0' max='2000' value={formData.weight} onChange={handleChange}/>
                    <h5>Reps:</h5>
                    <input className='start-exercise-input' name='reps' type='number' min='0' max='100' value={formData.reps} onChange={handleChange}/>
                </div>
            </div>
            <div className='selected-exercise-goal result fl'>
                <h5>Reps Performed:</h5><input className='start-exercise-input' name='reps_completed' type='number' min='0' max='100' value={formData.reps_completed} onChange={handleChange}/>
                <button>Completed?</button>
            </div>
            <div className='selected-exercise-submit cc'>
                <button>Submit</button>
            </div>
        </>
    )
}

export default Set;