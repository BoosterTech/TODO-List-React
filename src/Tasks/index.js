import React from "react";
import "./style.css";

const onDelete = (name) => {
    console.log(`Nazwa zadania do usuniecia: ${name}`);
}


const Tasks = ({ tasks, hideDoneTasksVar }) => (
    <ul className="tasksList">
        {tasks.map((task, id) => (
            <li key={id} className={`tasksList__item ${hideDoneTasksVar && task.done ? "tasksList__item--hidden" : ""}`}>
                <button className="tasksList__button tasksList__button--done">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`tasksList__taskContent ${task.done ? "tasksList__taskContent--done" : ""} `}>
                    {task.content}
                </span>
                <button
                    className="tasksList__button tasksList__button--remove"
                    onClick={() => onDelete(task.content)}>🗑️</button>
            </li>

        ))}
    </ul>
);

export default Tasks;