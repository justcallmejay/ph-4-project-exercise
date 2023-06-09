import React from 'react';
import './ExerciseCard.css'

function ExerciseCard( { ex, setSelectExercise } ) {
    return(
        <div className='exercise-card' onClick={() => setSelectExercise(ex)}>
            <div className='exercise-name rc'>
                <h5>{ex.name}</h5>
            </div>
            <div className='exercise-img-container cc'>
                <div className='exercise-img rc'>
                    <p>img</p>
                </div>
            </div>

            <div className='exercise-type fl'>
                <div className='ex-field'>
                    <h5>Type: {ex.kind}</h5>
                </div>
                <div className='ex-field'>
                    <h5>Muscle: {ex.muscle}</h5>
                </div>
                <div className='ex-field'>
                    <h5>Difficulty: {ex.difficulty}</h5>
                </div>
            </div>

        </div>
    )
}

export default ExerciseCard;