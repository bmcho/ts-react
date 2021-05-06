import React, { useState, useReducer } from 'react';

type Action = { type: 'INCREASE'} | { type: 'DECREASE'}

function reducer(state:number, action:Action):number {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE' :
            return state - 1;
        default:
            throw new Error('Unhandleed action type');
    }

}

function Counter() {
    // const [count, setCounter] = useState<number>(0);
    // const onIncrease = () => setCounter(count + 1);
    // const onDecrease = () => setCounter(count - 1);
    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch({ type: 'INCREASE'});
    const onDecrease = () => dispatch({ type: 'DECREASE'});

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    )
}

export default Counter;