import React from 'react';
import './UserProgressDayCard.css'
import { BsCheck2 } from 'react-icons/bs'
import { HiXMark } from 'react-icons/hi2'

function UserProgressDayCard( { displayExerciseDay } ) {
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
                   <h5>Completed: {ex.percent_completed >= 100 ? <BsCheck2 /> : ex.percent_completed.toFixed(1)}</h5>
                </div>
            </div>
                )}
        </div>
    )
}

export default UserProgressDayCard