import React from 'react';
import './tasks.scss';

class Tasks extends React.Component {

    state = {
        tasks : [],
        value : "",
        newTask : false,

    };

    
    handleBtn = () => {
        !this.state.newTask ?
        this.setState({
            newTask: true
        })
        :
        this.setState({
            newTask: false
        })
    }

    handleValue = (event) => {
        this.setState({
            value : event.target.value
        })
    }

    render () {

    let newDate = new Date()
    let date = newDate.getDate();
    //
    let month = newDate.getMonth();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = monthNames[month];
    //
    let day = newDate.getDay() - 1 ;
    let dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let dayName = dayNames[day];
    //
    let year = newDate.getFullYear();

    // Destructuring
    const { newTask, value } = this.state;

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
                <div key="1" className="tasks-container tasks">
                    <div className="tasks-container task">
                        <input type="checkbox" name="task"/>
                        <label htmlFor="task"  id="task">Ola</label>
                    </div>
                </div>
                <div className="tasks-container btn">
                    {newTask && <div id="save"><input type="text" name="task" id="input-save" value={value} onChange={this.handleValue}/><button htmlFor="task" id="btn-save">Add</button></div>}
                    <button id="btn-add" onClick={() => this.handleBtn()}>{!newTask ? "+" : "-"}</button>
                </div>
            </div>
        </div>
    )
}
};

// Export
export default Tasks;