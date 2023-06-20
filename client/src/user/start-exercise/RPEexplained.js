import React from 'react';
import struggle from '../../image/struggle.png'

function RPEexplained( { handleToggleDisplay } ) {
    return(
        <>
            <div className='intensity-info-container rc'>
        <div className='intensity-info cc'>
            <div className='intensity-img-container rc'>
                <div className='intensity-img rc'>
                    <img src={struggle} alt='tired'/>
                </div>
            </div>
            <div className='intensity-explanation-container rc'>
                <div className='intensity-explanation'>
                <p>
                Intensity is based on the perceived difficulty by the individual (commonly known as rate of perceive exertion (RPE)) on a 1-10 scale.  Usually, it is measured based on how many repetitions the performers could've done.  Because the muscle begins to fatigue later in the set, it is difficult to acknowledge how much until towards the end of a set (assuming the person is performing at a high intensity.)
                Individuals active in fitness refers to 10 as being unable to perform another repetition (assuming each repeition is done properly), 9 being able to perform one more repetition, 8 being able to perfrom two.  (Here, 7 is a reference to being able to perform more than 2.)
                The scale in this app is incremented by .5 after 7.  Use this fractional measurement as if you were unsure if more or less repetitions could've been performed.  To be safe, err on the cautious side; if you're uncertain you could've perform 1 or 2 more repetitions, then enter 8.5.
                </p>
                </div>
            </div>
            <div className='intensity-exit'>
                <button className='btn' onClick={handleToggleDisplay}>Ok</button>            
            </div>
        </div>
    </div>
        </>
    )
}

export default RPEexplained;