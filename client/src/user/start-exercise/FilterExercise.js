import React from 'react';

function FilterExercise( { setFilterExercise, searchExercise, setSearchExercise } ) {

    function clearSearch() {
        setSearchExercise("")
        setFilterExercise("")
}

    return(
        <>
            {/* <div className='filter-exercise rc'> */}
            <h6>Filter:</h6>
                <select onChange={(e) => setFilterExercise(e.target.value)}>
                    <option value=""></option>
                    <option value="Easy">Easy</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Difficult">Difficult</option>
                </select>
            {/* </div> */}
            <div className='search-exercises fl' onClick={clearSearch}>
                <input className='search-ex' type='text' value={searchExercise} onChange={(e) => setSearchExercise(e.target.value)} placeholder='find exercise'/>
            </div>
        </>
    )
}

export default FilterExercise;
