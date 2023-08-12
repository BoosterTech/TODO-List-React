import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDoneTasksVar }) => (
    <ul className="tasksList">
        {tasks.map(task => (
            <li className={`tasksList__item ${hideDoneTasksVar && task.done ? "tasksList__item--hidden" : ""}`}>
                <button className="tasksList__button tasksList__button--done">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`tasksList__taskContent ${task.done ? "tasksList__taskContent--done" : ""} `}>
                    {task.content}
                </span>
                <button className="tasksList__button tasksList__button--remove">🗑️</button>
            </li>

        ))}
    </ul>
);

export default Tasks;