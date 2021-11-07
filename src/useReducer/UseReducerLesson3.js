import React, { useReducer } from 'react'

const initialState = {
    message: "Hi"
}

function reducer(state, action) {
    switch (action.type) {
        case "buy": return { message: `lets buy` }
        case "sell": return { message: `lets sell` }
        default: return { message: "No update available" }
    }

}
function UseReducerLesson3() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h3>Lesson 3</h3>
            <h3>message:{state.message}</h3>
            <button onClick={() => dispatch({ type: 'buy' })}>Buy</button>
            <button onClick={() => dispatch({ type: 'sell' })}>Sell</button>
        </div>
    );
}

export default UseReducerLesson3;
