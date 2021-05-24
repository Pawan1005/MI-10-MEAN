import React from 'react'

 function FuncComp() {
     const date = new Date();
     let day = ["sunday","monday","tuesday","wedensday","thrusday","friday","saturday"] ;
     return (
        <div>
            <h4>This is functional Component</h4>
            <h4>Date and time as a string (toLocaleString) method:  {date.toLocaleString()} </h4> {/*for string time and date output*/}
            <h4>Only Date  as a string (toLocaleDateString) method :  {date.toLocaleDateString()} </h4> {/*for string  date output*/}
            <h4>only time  as a string (toLocaleTimeString) method:  {date.toLocaleTimeString()} </h4> {/*for string time and date output*/}

            <h4> Todays day : {day[date.getDay()]}</h4>
        </div>
    )
}
export default FuncComp 