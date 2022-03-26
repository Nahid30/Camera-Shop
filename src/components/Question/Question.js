import React from 'react';
import './Question.css'

const Question = () => {
    return (

        <div className='question'>
            

            <div className="accordion container" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header text-center" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h2>1.How React Works</h2>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                
                    <p>React is a javascript's library. React make UI easily if you understand.In react you dont need to code repeatedly rather once you code you can use it from anywhere.React introduced an idea that similar in look different in data, in this idea you can create one structure for many for different datas.React have also JSX concepts that you can easily write JS HTML with also JS code in one file.So that is how React works!!</p>

                </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header text-center" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <h2>2.How useState Works</h2>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    
                    <p>useState is a Hook that allows you to have state variables in functional components.useState is using for to change something.For example you declare a function and it return a variable with the current state value and you can change or update the value in this state to another function and set the data to that initial state.Finally you can say that you need a data , array , obj, or function etc and you set a initial state and you can use,change or update whenever you need!!!</p>

                </div>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Question;