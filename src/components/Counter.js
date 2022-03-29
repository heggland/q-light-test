import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
} from "../actions";

const Counter = () => {
    const counter = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    return (
        <>
            <button className="button button--increment" onClick={() => dispatch(increment())}>+</button>
            <span className="counter--value ">{counter}</span>
            <button className="button button--decrement" onClick={() => dispatch(decrement())}>-</button>
        </>
    );
}

export default Counter;
