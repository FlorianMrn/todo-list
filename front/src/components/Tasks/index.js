import React, { useState, useEffect } from 'react';
import './tasks.scss';
import APIHelper from "../../APIHelper";
import {year, dayName, monthName, date} from "./utils";

const Tasks = () => {

    const [newTask, setNewtask] = useState(false);
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState("")

    useEffect(() => {
        const fetchTodoAndSetTodos = async () => {
          const todos = await APIHelper.getAllTodos();
          setTodos(todos);
        }
        fetchTodoAndSetTodos()
    }, []);

    
    const handleBtn = () => {
        !this.state.newTask ?
        this.setState({
            newTask: true
        })
        :
        this.setState({
            newTask: false
        })
    };

    // CRUD
    const createTodo = async e => {
        e.preventDefault()
        if (!todo) {
          alert("please enter something")
          return
        }
        if (todos.some(({ task }) => task === todo)) {
          alert(`Task: ${todo} already exists`)
          return
        }
        const newTodo = await APIHelper.createTodo(todo)
        setTodos([...todos, newTodo])
    };
    
    const deleteTodo = async (e, id) => {
        try {
          e.stopPropagation()
          await APIHelper.deleteTodo(id)
          setTodos(todos.filter(({ _id: i }) => id !== i))
        } catch (err) {}
    };
    
    const updateTodo = async (e, id) => {
        e.stopPropagation()
        const payload = {
          completed: !todos.find(todo => todo._id === id).completed,
        }
        const updatedTodo = await APIHelper.updateTodo(id, payload)
        setTodos(todos.map(todo => (todo._id === id ? updatedTodo : todo)))
    };

    // Destructuring

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
                    {newTask && <div id="save"><input type="text" name="task" id="input-save" value="ola" onChange={this.handleValue}/><button htmlFor="task" id="btn-save">Add</button></div>}
                    <button id="btn-add" onClick={() => this.handleBtn()}>{!newTask ? "+" : "-"}</button>
                </div>
            </div>
        </div>
    )
};

// Export
export default Tasks;