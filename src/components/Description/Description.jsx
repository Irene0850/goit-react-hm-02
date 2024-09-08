import React from "react";

import css './Description.module.css';

const Description = ({ title, description }) => {
    return (
        <div>
            <h1 className={css.title}>Sip Happens Cafe</h1>
            <p className={css.description}>
                Please leave your feedback about our service by selecting one of the options below.
            </p>
        </div>
    );
};

export default Description;