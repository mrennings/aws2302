import React, { useState } from "react";


export default function Todolist() {
    // let tasks = [];
    const [ todos, addTodo ] = useState([]);
    const [ task, setTask ] = useState('');
    
    const taskEingabe = (event) => {
        // * Jede Zeicheneingabe im Formularfeld verarbeiten
        setTask(event.target.value);
    };

    const addTask = () => {
        // * Neuen Task der Liste hinzufügen
        const inp = document.getElementById("inp_task");
        if (inp.value !== "") {
            addTodo( [...todos, {id: Date.now(), task: inp.value, done: false} ] );
            setTask("");
        }
    };

    const toggleDone = (id) => {
        addTodo(todos.map((elem) => elem.id === id ? { ...elem, done: !elem.done} : elem));
    };
    
    function Todos() {
        /*
         * Liste der Todos generieren
        */
        return (
            todos.map((elem) => {
                return (
                <li className='todo-entry' key={elem.id}>
                <div>
                    <label>
                        <input type="checkbox"
                            className="chkbx_todo_done"
                            name={"erledigt-"+elem.id}
                            id={elem.id}
                            defaultChecked={elem.done}
                            onChange={() => toggleDone(elem.id)}
                        />
                        {elem.task}
                    </label>
                </div>
                </li>
                )
            })
        );
    }
    

    /*
      * Eigentliche App
     */
    return (
        <>
        <input type='text'
                name="inp_task"
                id="inp_task"
                value={task}
                onChange={taskEingabe}
                placeholder="Aufgabe eingeben …"
        />
        <button name="btn_enterTask"
                id="btn_enterTask"
                onClick={addTask}
        >+</button>
        <br />
        <h2>Zu Erledigen</h2>
        <ul>
            <Todos />
        </ul>
        </>
    );
}
