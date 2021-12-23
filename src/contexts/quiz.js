import { createContext, useReducer } from "react";
import questions from '../data';

const initialState = {
    questions,
    currentQuestionIndex: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "NEXT_QUESTION": {
            const currentQuestionIndex = state.questions[state.currentQuestionIndex].choices[action.payload].nextQuestionId
            console.log(currentQuestionIndex)
            return {
                ...state,
                currentQuestionIndex,
            }
        }
        case "RESTART":
            return initialState
        default:
            return state;
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = useReducer(reducer, initialState);
    return <QuizContext.Provider value={value} >{children}</QuizContext.Provider>;
}

