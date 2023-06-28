import React from 'react';

const UserProgressDay = ({ currentDate, day, convert, areDatesTheSame, exerciseCard }) => {

  const filteredExercises = convert.filter(newObject =>
    areDatesTheSame(new Date(currentDate.getFullYear(), currentDate.getMonth(), day), newObject.date),
  );

  // console.log(filteredExercises)
  

  const completedExercises = (filteredExercises.map(obj => obj.reps_completed).reduce((sum, a) => sum + a, 0) / filteredExercises.length) >= 100

  // console.log((filteredExercises.map(obj => obj.percent_completed).reduce((sum, a) => sum + a, 0) / filteredExercises.length) >= 1)

  return (
    <span className="day-box" >
      {day}
      {filteredExercises.map((newObject, index) => {
        if (index === 0) {
          return (
            <div className={`rc ${completedExercises ? "completed" : "date"}`} key={newObject.id} onClick={() => exerciseCard(filteredExercises)}>
              Exercises: {filteredExercises.length}
            </div>
          );
        }
        return null;
      })}

    </span>
  );
};

export default UserProgressDay;