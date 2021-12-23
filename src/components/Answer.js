import { useSpring, animated } from "@react-spring/web";
import { useRef, useState }  from 'react';
import '../index.css';

const trans = (x, y, s) =>
  `perspective(600px) scale(${s})`;

const calc = (x, y, rect) => [
    1,
    1,
    1.05
];

const Answer = ({answerText, index, onSelectAnswer}) => {
    const letterMapping = ['A', 'B', 'C', 'D']
    const ref = useRef(null);
    const [xys, set] = useState([0, 0, 1]);

    const props = useSpring({ xys });

    return (
        <animated.div
            className="col-6 btn btn-dark m-1 p-3 text-start"
            onClick={() => onSelectAnswer(answerText)} ref={ref}
            onMouseLeave={() => {
                set([0, 0, 1])}
            }
            onMouseEnter={(e) => {
                const rect = ref.current.getBoundingClientRect();
                set(calc(e.clientX, e.clientY, rect));
            }}
            style={{ transform: props.xys.to(trans) }}
        >
            {letterMapping[index]}){answerText}
        </animated.div>
    )
}

export default Answer;