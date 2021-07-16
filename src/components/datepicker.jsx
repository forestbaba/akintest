import React from 'react'
import calendar from '../assets/images/calendar.svg';

const Datepicker =()=> {
    return (
        <div className="p1">
        <p>Start</p>
        <p>Select date</p>
        <img src={calendar} />
    </div>
    )
}
export default Datepicker;