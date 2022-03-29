import { useSelector, useDispatch } from "react-redux";
import actions from "../actions";

const Counter = () => {
    const counter = useSelector((state: any) => state.counter);

    const dispatch = useDispatch();

    return (
        <>
            <button className="button button--increment" onClick={() => dispatch(actions.increment())}>+</button>
            <span className="counter--value ">{counter}</span>
            <button className="button button--decrement" onClick={() => dispatch(actions.decrement())}>-</button>
        </>
    );
}

export default Counter;
