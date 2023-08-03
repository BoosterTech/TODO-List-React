import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDoneTasksVar }) => (
    <ul className="tasksList">
        {tasks.map(task => (
            <li className={`tasksList__item ${hideDoneTasksVar && task.done ? "tasksList__item--hidden" : ""}`}>
                <button className="js-taskDone ">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`js-taskContent ${task.done ? "js-taskContent--done" : ""} `}>
                    {task.content}
                </span>
                <button className="js-taskRemove">🗑️</button>
            </li>

        ))}
    </ul>
);

export default Tasks;