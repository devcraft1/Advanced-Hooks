import React from 'react'
import UseReducerLesson1 from './UseReducerLesson1'
import UseReducerLesson2 from './UseReducerLesson2';
import UseReducerLesson3 from './UseReducerLesson3';


function UseReducer() {
    return (
        <div>
            <h1>Use Reducer </h1>
            <UseReducerLesson1 />
            <UseReducerLesson2 />
            <UseReducerLesson3 />
        </div>
    );
}

export default UseReducer;


// When to useReducer 
//1. It takes in a state and an action and returns a new state
