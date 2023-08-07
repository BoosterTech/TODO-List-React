import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDoneTasksVar }) => (
    <ul className="tasksList">
        {tasks.map(task => (
            <li className={`tasksList__item ${hideDoneTasksVar && task.done ? "tasksList__item--hidden" : ""}`}>
                <button className="tasksList__buttonDone">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`tasksList__taskContent ${task.done ? "taskContent--done" : ""} `}>
                    {task.content}
                </span>
                <button className="tasksList__buttonRemove">🗑️</button>
            </li>

        ))}
    </ul>
);

export default Tasks;