import React, { useState } from 'react';
import { ImCheckmark } from 'react-icons/im';
import { RiDeleteBin2Fill } from 'react-icons/ri'

import './PerformedExercise.css'

function PerformedExercise( { perEx, index, deleteLastRoutine, arrayLength } ) {

    const [ toggleDelete, setToggleDelete ] = useState(false)

    function onMouseEnter() {
        if (index === arrayLength - 1)
        setToggleDelete(true)
    }

    function onMouseLeave() {
        setToggleDelete(false)
    }

    console.log(perEx)
    return(
        <div className='performed-exercise fl' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className='performed-exercise-attr fl'>
                <h6>{perEx.workout.name}: ({perEx.workout.kind})</h6> |
                <h6>Weight: {perEx.weight}</h6> |
                <h6>Reps: {perEx.reps}</h6> |
                <h6>Completed: {perEx.percent_completed === 100 ? <ImCheckmark/> : perEx.percent_completed }</h6>
            </div>
            {toggleDelete ? 
            <div className='delete-container cc' onClick={() => deleteLastRoutine(index, perEx.id)}>
                <RiDeleteBin2Fill size={15}/>
            </div> : ""}
        </div>
    )
}

export default PerformedExercise;