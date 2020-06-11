import React from 'react';
import './tasks.scss';

const Tasks = () => {

    let newDate = new Date()
    let date = newDate.getDate();
    //
    let month = newDate.getMonth();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = monthNames[month];
    //
    let day = newDate.getDay() + 1 ;
    let dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let dayName = dayNames[day];
    //
    let year = newDate.getFullYear();

    return (
        <div className="container">
            <div className="tasks-container">
                <div className="tasks-container-header">
                    <div className="tasks-container-header-date">
                        <div className="tasks-container-header-date date">
                            {date}
                        </div> 
                        <div className="tasks-container-header-date month-year">
                            <div id="month">
                                {monthName}
                            </div>
                            <div id="year">
                                {year}
                            </div>
                        </div> 
                    </div>
                    <div className="tasks-container-header-day">
                        {dayName}
                    </div>
                </div>
            </div>
        </div>
    )
};

// Export
export default Tasks;