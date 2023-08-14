
import React, { useState } from "react";
import "./style.css"

const Form = () => {
    const [newTaskContent, setNewTaskcontent] = useState("");

    return (
        <form className="taskForm " >
            <input className="taskForm__input " type="text" placeholder="Co jest do zrobienia?" />
            <button
                className="taskForm__button"
            >Dodaj zadanie</button>
        </form>
    );
};

export default Form;