import React, { useState } from 'react';
import { ImCheckmark } from 'react-icons/im';
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { LuTimer } from 'react-icons/lu'

import './PerformedExercise.css'

function PerformedExercise( { perEx, index, deleteLastRoutine, arrayLength } ) {

    const [ toggleDelete, setToggleDelete ] = useState(false)
    const [ toggleTimer, setToggleTimer ] = useState(false)

    function onMouseEnter() {
        if (index === arrayLength - 1)
        setToggleDelete(true)
    }

    function onMouseLeave() {
        setToggleDelete(false)
    }

    function handleToggleTimer() {
        setToggleTimer(true)
    }

    function handleToggleTimerLeave() {
        setToggleTimer(false)
    }

    return(
        <div className='performed-exercise fl' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className='performed-exercise-attr fl'>
                <h6 title={`[${perEx.workout.muscle}] ${perEx.workout.name} (${perEx.workout.kind})`}>[{perEx.workout.muscle}] {perEx.workout.name}: ({perEx.workout.kind})</h6> |
                <h6>Wt: {perEx.weight}</h6> |
                {toggleTimer ? 
                <h6>Hold: {perEx.timer}s</h6> :
                <h6>Reps: {perEx.reps}</h6> } 
                {perEx.timer ? 
                    <div className='timer-container rc' onMouseEnter={handleToggleTimer} onMouseLeave={handleToggleTimerLeave}>
                        <LuTimer />
                    </div> 
                        : ""}
                |
                <h6>RPE: {perEx.intensity}</h6> |
                <h6>Completed? {perEx.percent_completed >= 100 ? <ImCheckmark/> : perEx.percent_completed.toFixed(1) }</h6>
            </div>
            {toggleDelete ? 
            <div className='delete-container cc' onClick={() => deleteLastRoutine(index, perEx.id)}>
                <RiDeleteBin2Fill size={15}/>
            </div> : ""}
        </div>
    )
}

export default PerformedExercise;