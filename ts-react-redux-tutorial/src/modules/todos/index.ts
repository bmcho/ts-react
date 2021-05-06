// import { ActionType, deprecated, createReducer } from 'typesafe-actions';
// const {createStandardAction, createAction} = deprecated;


// const ADD_TODO = 'todos/ADD_TODO' as const;
// const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
// const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

//typesafe
// const ADD_TODO = 'todos/ADD_TODO';
// const TOGGLE_TODO = 'todos/TOGGLE_TODO';
// const REMOVE_TODO = 'todos/REMOVE_TODO';

// let nexId = 1;

// export const addTodo = (text:string) => ({
//     type: ADD_TODO,
//     payload: {
//         id: nexId++,
//         text
//     }
// });
// export const toggleTodo = (id:number) => ({
//     type: TOGGLE_TODO,
//     payload: id
// });
// export const removeTodo = (id:number) => ({
//     type: REMOVE_TODO,
//     payload: id
// });

//typeSafe
//createAction을 쓰는 이유는 nexid값이 param을 통해 오는 값이 아니기 때문에
//addTodo 처럼 변수값과 return값이 다르면 createAction을 쓰지 않는것이 더 깔끔할수도 있다
// export const addTodo = createAction(ADD_TODO, action => (text:string) => 
//     action({
//     id: nexId++,
//     text
// }));
// export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
// export const removeTodo = createStandardAction(REMOVE_TODO)<number>();

// const actions = {
//     addTodo,
//     toggleTodo,
//     removeTodo
// };

// type TodosAction = ActionType<typeof actions>;

// type TodoAction =
//     | ReturnType<typeof addTodo>
//     | ReturnType<typeof toggleTodo>
//     | ReturnType<typeof removeTodo>;

// export type Todo = {
//     id: number;
//     text: string;
//     done: boolean;
// }

// type TodosState = Todo[];

// const initialState: TodosState = [];

// //typesafe
// const todos = createReducer<TodosState, TodosAction>(initialState, {
//     [ADD_TODO]: (state, action) => state.concat({
//         ...action.payload,
//         done:false
//     }),
//     [TOGGLE_TODO]: (state,action) => state.map(
//         todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo
//     ),
//     [REMOVE_TODO]: (state, action) => state.filter(
//         todo => todo.id !== action.payload
//     )
// });

// function todos(state:TodoState = initialState, action: TodoAction) : TodoState {
//     switch(action.type) {
//         case ADD_TODO:
//             return state.concat({
//                 id: action.payload.id,
//                 text: action.payload.text,
//                 done: false
//             });
//         case TOGGLE_TODO:
//             return state.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo);
//         case REMOVE_TODO:
//             return state.filter(todo => todo.id !== action.payload);
//         default:
//             return state;
//     }
// }

// export default todos;

export { default } from './reducer';
export * from './actions';
export * from './types';