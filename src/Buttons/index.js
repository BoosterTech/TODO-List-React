import React from "react";
import "./style.css"

const Buttons = ({ tasks, hideDoneTasksVar }) => (
    tasks.length > 0 && (
        <span className=" section__buttons">
            <button className="buttons__showHideTasks"
                disabled={!(tasks.some(({ done }) => done))}> {hideDoneTasksVar ? "Pokaż" : "Ukryj"} zrobione </button>
            <button className="buttons__markAllDone"
                disabled={tasks.every(({ done }) => done)}> Ukończ wszystkie </button>
        </span>
    )
);

export default Buttons;