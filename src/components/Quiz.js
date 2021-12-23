import { QuizContext } from "../contexts/quiz";
import { useContext } from "react";
import Question from "./Question";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';


const Quiz = () => {    
    return (
        <div className="custom-container">
           <div className="h-100 d-flex align-content-center justify-content-center flex-wrap">
                <div>
                    <Question />
                </div>
            </div>
        </div>
    )
}

export default Quiz;