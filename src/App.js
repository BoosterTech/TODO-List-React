import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
    { id: 1, content: "przejsc na React", done: true },
    { id: 2, content: "zjesc gofry", done: false },
];

let hideDoneTasksVar = false;

function App() {
    return (
        <Container>
            <Header title="Lista zadań" />
            <Section title="Dodaj nowe zadanie"
                bodyContent={<Form />}
            />
            <Section title="Lista zadań"
                extraHeaderContent={<Buttons tasks={tasks} hideDoneTasksVar={hideDoneTasksVar} />}
                bodyContent={<Tasks tasks={tasks} hideDoneTasksVar={hideDoneTasksVar} />}
            />
        </Container>
    );
}

export default App;
