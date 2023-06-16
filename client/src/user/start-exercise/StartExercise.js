import React, { useState, useEffect } from 'react';
import { Link } from  'react-router-dom'
import ExerciseCard from './ExerciseCard';
import PerformedExercise from './PerformedExercise';
import Set from './Set';
import './StartExercise.css'
import FilterExercise from './FilterExercise';

function StartExercise( { currentUser } ) {

    const parts = ['All', 'Glutes', 'Shoulders', 'Quads', 'Hamstrings', 'Abs', 'Back', 'Chest', 'Biceps', 'Triceps', 'Calves', 'Forearm']

    const date = new Date()
    const options = {timeZone: "UTC",  month: "short", day: "numeric", year: "numeric"}
    const formattedDate = date.toLocaleDateString('en-Us', options)

    console.log(date)

  
    const [seconds, setSeconds] = useState(0);
    const [ errors, setErrors ] = useState([])
    const [ selectBp, setSelectBp ] = useState("")
    const [ exercise, setExercise ] = useState([])
    const [ selectExercise, setSelectExercise] = useState("")
    const [ filterExercise, setFilterExercise ] = useState("")
    const [ searchExercise, setSearchExercise ] = useState("")
    const [ performedExercises, setPerformedExercises ] = useState([])
    const [ eraseInput, setEraseInput ] = useState(false)
    const [ formData, setFormData ] = useState({
        reps: 0,
        weight: 0,
        reps_completed: 0,
        intensity: 0,
        timer: 0
    })

    useEffect(() => {
        if (eraseInput) {
            setFormData({
                reps: 0,
                weight: 0,
                intensity: 0,
                reps_completed: 0
            })
        }

    }, [eraseInput])

    console.log(formData.intensity)
    console.log(seconds)

    console.log(selectExercise)
    
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

    const getExerciseByDifficulty = exercise.filter(ex => {
        if (filterExercise === '') return true;

        return ex.difficulty === filterExercise
    })

    const searchExerciseInput = getExerciseByDifficulty.filter(ex => 
        ex.name.toUpperCase().includes(searchExercise.toUpperCase()))
    
    function handleSelectBp(e) {
        setSelectBp(e)
    }

    function handleChange(e) {
        if (eraseInput === true) {
            setEraseInput(!eraseInput)
        }
        const { name, value } = e.target
        setFormData(acc => {
            return{
                ...acc, [name]: parseFloat(value, 1) || ""
            }
        })
    }

    console.log(formData.reps_completed === 0)

    function handleSubmit(e) {
        e.preventDefault();
        let intensityInput;
        const completed = ((formData.reps_completed / formData.reps) * 100)

        if (formData.reps_completed === 0) {
            intensityInput = 10
        } else {
            intensityInput = formData.intensity
        }

        fetch('/user_workouts', {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                user_id: currentUser.id,
                workout_id: selectExercise.id,
                weight: formData.weight,
                reps: formData.reps,
                intensity: intensityInput,
                percent_completed: completed,
                date: formattedDate,
                timer: seconds
            })
        })
        .then(res => {
            if (res.ok) {
                setSelectExercise("");
                setEraseInput(false)
                return res.json()
            } else {
                return res.json()
            }
        })
        .then(data => {
            if (data) { setErrors(data.errors) }
        })
        .catch(error => { console.log(error) })
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
                <h4 className='cc'>{formattedDate}</h4>
                <h4>Select bodypart(s) targeted today:</h4>
                <div className='start-exercise-bp-container fl'>
                    {parts.map((part, i) => 
                    <div className='bp-label cc' value={part} key={i} onClick={(e) => handleSelectBp(e.target.getAttribute('value'))}>{part}</div>)}
                </div>
                {selectBp ?
                <div className='start-exercise-select-container cc'>
                    <div className='start-exercise-filter rc'>
                        <div className='start-exercise-label'>
                            <h5>Select an exercise:</h5>
                        </div>
                        <div className='filter-exercise rc'>
                            <FilterExercise setFilterExercise={setFilterExercise} searchExercise={searchExercise} setSearchExercise={setSearchExercise}/>
                        </div>
                    </div>
                    <div className='start-exercise-select-field fl'>
                        {exercise ?
                        searchExerciseInput.map(ex =>
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
                            <Set seconds={seconds} setSeconds={setSeconds} currentUser={currentUser} setEraseInput={setEraseInput} eraseInput={eraseInput} selectExercise={selectExercise} errors={errors} formData={formData} handleChange={handleChange}/>
                        : ""}
                </form>
            </div>
            <div className='start-exercise-back-container fl'>
                <Link to={`/user/${currentUser.username}`}>
                    <h6>Click here to finish workout, or to return home</h6>
                </Link>
            </div>
    </div>
    )
}

export default StartExercise;