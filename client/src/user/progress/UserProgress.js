import React, { useEffect, useState, useContext } from 'react';

import UserProgressDay from './UserProgressDay';
import moment from 'moment';
import './UserProgress.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { getSortedDay, prevMonth, nextMonth, days, getMonthYear, areDatesTheSame } from './Range';
import UserProgressDayCard from './UserProgressDayCard';
import { UserContext } from '../../context/account';

function UserProgress() {

  const { currentUser } = useContext(UserContext) 
  

    const options = { timeZone: "UTC", month: "short", day: "numeric", year: "numeric"};
    const date = new Date()
    const convertDate = (ev) => {
        const formattedDate = new Date(ev).toLocaleDateString('en-US', options)
        const intDate = moment(formattedDate).format('YYYY, MM, DD')
        const dateWithoutCommas = intDate.replace(/[,\s]/g, '');
        const getyearInt = parseInt(dateWithoutCommas.slice(0, 4))
        const getMonthInt = parseInt(dateWithoutCommas.slice(4, 6))
        const getDayInt = parseInt(dateWithoutCommas.slice(6, 8))
        
        return new Date(getyearInt, getMonthInt - 1, getDayInt);
    }
    const convertToday = convertDate(date)

    const [ displayExerciseDay, setDisplayExerciseDay ] = useState([])
    const [ toggleDisplay, setToggleDisplay ] = useState(false)
    const [ userExercises, setUserExercises ] = useState([])
    const [ currentDate, setCurrentDate ] = useState(new Date(convertToday))

    useEffect(() => {
        fetch(`/find_by_date/?id=${currentUser.id}`)
        .then(res => {
            if (res.ok) {
                res.json().then(ex => setUserExercises(ex))
           }
        })
        .then(data => {
            if (data) {
                console.log(data.errors)
            }
        })
    }, [])

    function exerciseCard(obj) {
      setToggleDisplay(toggleDisplay => !toggleDisplay)
      setDisplayExerciseDay(obj)
    }

    // console.log(displayExerciseDay)

    function handleToggleDisplay() {
      setToggleDisplay(toggleDisplay => !toggleDisplay)
    }

    const convert = userExercises.map(ex => { 
        const convertedTime = convertDate(ex.date)
        return {...ex, date: convertedTime}
    })
    
    return(
        <>
        {toggleDisplay ? 
        <div className='display-exercise-container rc' onClick={handleToggleDisplay}>
          <UserProgressDayCard displayExerciseDay={displayExerciseDay}/>
        </div> 
        : "" }
        <div className='user-progress' >
          <div className='calendar-head fl'>
            <button className='calendar-btn rc' onClick={() => prevMonth(currentDate, setCurrentDate)}><BsArrowLeftShort size={40}/></button>
            <div className='calendar-date rc'>
              <p>{getMonthYear(currentDate)}</p>
            </div>
            <button className='calendar-btn rc' onClick={() => nextMonth(currentDate, setCurrentDate)}><BsArrowRightShort size={40}/></button>
          </div>
          <div className='calendar-days rc'>
            {days.map(day => 
              <div className='days-container'>
              {day}
              </div>
              )}
          </div>
          <div className='calendar-body'>
          {getSortedDay(currentDate).map((day, i) => {
            return (
              <UserProgressDay day={day} convert={convert} areDatesTheSame={areDatesTheSame} currentDate={currentDate} exerciseCard={exerciseCard} key={i}/>
              );
            })}
            </div>
            <div className='calendar-legend-container fl'>
              <div className='calendar-legend-box green'/>
              <p>= All exercises performed on that day are 100% completed</p>
              <div className='calendar-legend-box white'/>
              <p>= One or more exercises performed on that day are incomplete</p>
            </div>
            </div>
          </>
            )
        }
          
export default UserProgress;