import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
    const [hideDoneTasksVar, setHideDoneTasks] = useState(false);
    const [tasks, setTasks] = useState([
        { id: 1, content: "przejsc na React", done: true },
        { id: 2, content: "zjesc gofry", done: false },
    ])

    const toggleHideDone = () => setHideDoneTasks(hideDoneTasksVar => !hideDoneTasksVar);
    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    }

    return (
        <Container>
            <Header title="Lista zadań" />
            <Section title="Dodaj nowe zadanie"
                bodyContent={<Form />}
                headerType="section__header--top"
            />
            <Section title="Lista zadań"
                extraHeaderContent={
                    <Buttons
                        tasks={tasks}
                        hideDoneTasksVar={hideDoneTasksVar}
                        toggleHideDone={toggleHideDone}
                    />}
                bodyContent={
                    <Tasks
                        tasks={tasks}
                        hideDoneTasksVar={hideDoneTasksVar}
                        removeTask={removeTask}
                    />}
                id="section__flex"
                headerType="section__header"
            />
        </Container>
    );
}

export default App;
