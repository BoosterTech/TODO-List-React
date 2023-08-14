import React from "react";
import "./style.css"

const Buttons = ({ tasks, hideDoneTasksVar, toggleHideDone }) => (
    tasks.length > 0 && (
        <span className=" buttons">
            <button
                className="buttons__button"
                onClick={toggleHideDone}
                disabled={!(tasks.some(({ done }) => done))}> {hideDoneTasksVar ? "Pokaż" : "Ukryj"} ukończone </button>
            <button className="buttons__button"
                disabled={tasks.every(({ done }) => done)}> Ukończ wszystkie </button>
        </span>
    )
);

export default Buttons;