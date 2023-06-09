import React, { useState, useEffect } from 'react';
import { Link } from  'react-router-dom'
import ExerciseCard from './ExerciseCard';
import PerformedExercise from './PerformedExercise';
import Set from './Set';
import './StartExercise.css'

function StartExercise( { currentUser } ) {

    const parts = ['All', 'Glutes', 'Shoulders', 'Quads', 'Hamstrings', 'Abs', 'Back', 'Chest', 'Biceps', 'Triceps', 'Calves', 'Forearm']

    const date = new Date()
    const options = {timeZone: "UTC",  month: "short", day: "numeric", year: "numeric"}
    const formattedDate = date.toLocaleDateString('en-Us', options)

    const [ selectBp, setSelectBp ] = useState("")
    const [ exercise, setExercise ] = useState([])
    const [ selectExercise, setSelectExercise] = useState("")
    const [ performedExercises, setPerformedExercises ] = useState([])
    const [ formData, setFormData ] = useState({
        reps: 0,
        weight: 0,
        reps_completed: 0
    })
    
    useEffect(() => {
        let url;
        if (selectBp === "All") {
            url = `/workouts`
        } else {
            url = `/get_exercises/?muscle=${selectBp}`
        }
        fetch(url)
        .then(res => {
            if (res.ok) {
                res.json().then(res => setExercise(res))
            } else { return res.json() }
        })
        .then(data => {
            if (data) { console.log(data.error) }
        })
        .catch(error => { console.log(error) })
    }, [selectBp])

    useEffect(() => {
        fetch(`/user_workouts/?user_id=${currentUser.id}&date=${formattedDate}`)
        .then(res => {
            if (res.ok) {
                res.json().then(res => setPerformedExercises(res))
            } else {
                return res.json()
            }
        })
    }, [selectExercise])

    
    function handleSelectBp(e) {
        setSelectBp(e)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormData(acc => {
            return{
                ...acc, [name]: parseInt(value) || ""
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const completed = ((formData.reps_completed / formData.reps) * 100)
        fetch('/user_workouts', {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                user_id: currentUser.id,
                workout_id: selectExercise.id,
                weight: formData.weight,
                reps: formData.reps,
                percent_completed: completed,
                date: formattedDate
            })
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                return res.json()
            }
        })
        .then(data => {
            if (data) { console.log(data.errors) }
        })
        .catch(error => { console.log(error) })
        setSelectExercise("");
    }

    function handleDeletePerformedExercise(id) {
        const deleteExercise = performedExercises.filter(ex => ex.id !== id) 
        setPerformedExercises(deleteExercise)
    }

    function deleteLastRoutine(index, id) {
        if (index === performedExercises.length - 1) {
            fetch(`/user_workouts/${id}`, {
                method: "DELETE",
            })
            .then(res => {
                res.json().then(res => handleDeletePerformedExercise(res))
            })
            .then(error => {
                if (error) {
                    console.log(error.errors)
                }
            })
            .catch(error => {
                if (error) {
                    console.log(error)
                }
            })
        }
    }
    
    return(
        <div className='start-exercise cc'>
            <div className='start-exercise-container'>
                <h4>Select bodypart you want to target:</h4>
                <div className='start-exercise-bp-container fl'>
                    {parts.map((part, i) => 
                    <div className='bp-label cc' value={part} key={i} onClick={(e) => handleSelectBp(e.target.getAttribute('value'))}>{part}</div>)}
                </div>
                {selectBp ?
                <div className='start-exercise-select-container cc'>
                    <h5>Select an exercise:</h5>
                    <div className='start-exercise-select-field fl'>
                        {exercise ?
                        exercise.map(ex =>
                        <ExerciseCard ex={ex} key={ex.id} setSelectExercise={setSelectExercise}/> ) : ""}
                    </div>
                </div>
                : ""}
                <div className='completed-exercise-container fl'>
                    <h5>Completed Exercises:</h5>
                    {performedExercises.map((perEx, i) => 
                    <PerformedExercise perEx={perEx} key={perEx.id} index={i} deleteLastRoutine={deleteLastRoutine} arrayLength={performedExercises.length}/>)}
                </div>
                <form className='selected-exercise' onSubmit={handleSubmit}>
                        {selectExercise ?
                            <Set selectExercise={selectExercise} formData={formData} handleChange={handleChange}/>
                        : ""}
                </form>
            </div>
            <div className='start-exercise-back-container fl'>
                <Link to={`/user/${currentUser.username}`}>
                    <h6>Click here to finish working out or return home</h6>
                </Link>
            </div>
    </div>
    )
}

export default StartExercise;