import React from "react";
import "./style.css";


const Section = ({ title, extraHeaderContent, bodyContent }) => (
    <section className="section">
        <div className=" section--flex">
            <h2 className="section__header">{title}</h2>
            {extraHeaderContent}
        </div>
        {bodyContent}
    </section>
);

export default Section;