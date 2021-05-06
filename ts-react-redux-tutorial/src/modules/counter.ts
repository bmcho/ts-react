// const INCREASE = 'counter/INCREASE' as const;
// const DECREASE = 'counter/DECREASE' as const;
// const INCREASE_BY = 'counter/INCREASE_BY' as const;

import { deprecated, ActionType, createReducer } from 'typesafe-actions';

//typesafe
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

// export const increase = () => ({ type:INCREASE });
// export const decrease = () => ({ type:DECREASE });
// export const increaseBy = (diff: number) => ({ 
//     type:INCREASE_BY,
//     payload: diff
// });

//typesafe
const { createAction, createStandardAction } = deprecated;
export const increase = createStandardAction('counter/INCREASE')();
export const decrease = createStandardAction(DECREASE)();
export const increaseBy = createStandardAction(INCREASE_BY)<number>();


type CounterState = {
    count: number;
}
const initialState: CounterState = {
    count: 0
};

// type CounterAction = 
//     | ReturnType<typeof increase>
//     | ReturnType<typeof decrease>
//     | ReturnType<typeof increaseBy>;

//typesafe
const actions = {increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;

// function counter(state: CounterState = initialState, action: CounterAction):CounterState{
//     switch (action.type) {
//         case INCREASE:
//             return { count: state.count + 1 };
//         case DECREASE:
//             return { count: state.count - 1 };
//         case INCREASE_BY:
//             return { count: state.count + action.payload };
//         default:
//             return state;
//     }
// };

//typesafe mthodchanning 별로..
const counter = createReducer<CounterState, CounterAction>(initialState, {
    [INCREASE]: (state) =>  ({ count: state.count + 1 }),
    [DECREASE]: (state) =>  ({ count: state.count - 1 }),
    [INCREASE_BY]: (state, action) =>  ({ count: state.count + action.payload })
});
//typesafe methodchaining
// const counter = createReducer<CounterState, CounterAction>(initialState)
//   .handleAction(increase, state => ({ count: state.count + 1 }))
//   .handleAction(decrease, state => ({ count: state.count - 1 }))
//   .handleAction(increaseBy, (state, action) => ({
//     count: state.count + action.payload
//   }));

//   const counter = createReducer<CounterState, CounterAction>(initialState)
//   .handleAction(INCREASE, state => ({ count: state.count + 1 }))
//   .handleAction(DECREASE, state => ({ count: state.count - 1 }))
//   .handleAction(INCREASE_BY, (state, action) => ({
//     count: state.count + action.payload
//   }));

export default counter;