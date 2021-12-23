import { QuizContext } from "../contexts/quiz";
import { useContext } from "react";
import { useSpring, animated } from "react-spring";
import Answer from "./Answer"
import '../index.css';




const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    const isFinalAnswer = currentQuestion.choices == null;
    const props = useSpring({ 
        from: {opacity: 0},
        to: {opacity: 1}, 
        reset: true,
        config: { duration: 400},
    })

    return (
        <div>
            <animated.div style={props} className="display-5 mb-5 text-center m-3 fs-2 text-light">
                {currentQuestion.text}
            </animated.div>
            { !isFinalAnswer &&
                <div className="row d-flex justify-content-around">
                    {currentQuestion.choices.map((answer, index) => (
                        <Answer answerText={answer.text} key={index} index={index} onSelectAnswer={(answerText => 
                            dispatch({type: 'NEXT_QUESTION', payload: index}))}></Answer>
                    ))}
                </div>
            }
            { isFinalAnswer &&
            <div>
                <animated.div style={props} className="d-flex justify-content-center m-4 text-center text-light">
                    {currentQuestion.description}
                </animated.div>
                <div className="d-flex justify-content-center fs-3 mb-5">
                    <div className="btn btn-dark mt-5" onClick={() => dispatch({type: 'RESTART'})}>Start Again</div>
                </div>
            </div>
            }
        </div>    
    )
}

export default Question;