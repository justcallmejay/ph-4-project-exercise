import React, { useState } from 'react';
import './UserProgressDayCard.css'
import { BsCheck2 } from 'react-icons/bs'

function UserProgressDayCard( { displayExerciseDay } ) {

    const [ toggleIncomplete, setToggleIncomplete ] = useState(false)

    function handleToggleIncomplete(ex) {
        if (ex.reps_completed > 100 || ex.reps_completed < 100) {
            setToggleIncomplete(true)
        }
    }

    function handleToggleIncompleteLeave() {
        setToggleIncomplete(false)
    }

    return(
        <div className='user-progress-day-card'>
            {displayExerciseDay.map((ex, i) => 
            <div className='exercise-list cc' key={ex.id}>
                <div className='exercise-list-name'>
                    <h4>{i + 1}: {ex.workout.name}</h4>
                </div>
                <div className='exercise-list-stat fl'>
                    <h5>Weight: {ex.weight} lbs.</h5>
                   <h5>Reps: {ex.reps}</h5>
                   <h5>Intensity: {ex.intensity}</h5>
                   <h5 onMouseEnter={() => handleToggleIncomplete(ex)} onMouseLeave={handleToggleIncompleteLeave}>Completed: 
                   {ex.reps_completed == 100 ? 
                   <BsCheck2 /> : 
                        toggleIncomplete ? 
                        <span>{ex.reps_performed}reps</span> :
                        <span>{ex.reps_completed.toFixed(1)}%</span>
                   }
                   </h5>
                </div>
            </div>
                )}
        </div>
    )
}

export default UserProgressDayCard