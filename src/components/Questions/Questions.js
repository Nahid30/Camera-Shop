import React from 'react';
import './Question.css'

const Questions = ({question}) => {
    console.log(question)
    return (
        <div className='questions-container'>
            <p>React works in declarative code. To show what we mean by declarative code, we want you to imagine the following code expressed as an app. What you picture could look like the screen below, with a navbar, a header, a filter, and a list.</p>
        </div>
    );
};

export default Questions;