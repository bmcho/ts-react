import { create } from "node:domain";
import React, { createContext, Dispatch, useContext, useReducer } from "react";

type Color = 'red' | 'orange' | 'yellow';

type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
}

type Action = 
    |{ type: 'SET_COUNT'; count: number } 
    |{ type: 'SET_TEXT'; text: string }
    |{ type: 'SET_COLOR'; color: Color; }
    |{ type: 'TOGGLE_GOOD' };

function reducer(state:State, action:Action): State {
    switch (action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                count: action.count
            };
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            };
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color
            };
        case 'TOGGLE_GOOD':
            return {
                ...state,
                isGood: !state.isGood
            }
        default:
            throw new Error('Unhandleed action type');
    }
};

const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<Dispatch<Action> | null>(null);

type SampleProviderProps = {
    children: React.ReactNode;
}

export default function SampleProvider({ children }: SampleProviderProps) {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: 'hello',
        color: 'red',
        isGood: true
    });

    return(
        <SampleDispatchContext.Provider value={dispatch}>
            <SampleStateContext.Provider value={state}>
                { children }
            </SampleStateContext.Provider>
        </SampleDispatchContext.Provider>
    );
}

export function useSampleState() {
    const state = useContext(SampleStateContext);
    if (!state) {
        throw new Error('Cannot find Provider');
      }
      return state;
}

export function useSampleDispatch() {
    const dispatch = useContext(SampleDispatchContext);
    if (!dispatch) {
        throw new Error('Cannot find Provider');
      }
      return dispatch;
}