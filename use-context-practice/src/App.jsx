import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "./CountSlice";
import { useEffect, useState } from "react";
import axios from 'axios';

const App = () => {
  const { count } = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();
  const [num, setNum] = useState(0);

  useEffect(()=>{
    axios.get('/init')
    .then((resp)=>{
      setNum(resp.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <div className="text-6xl">{count}</div>
      <div>
        <input
          type="text"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </div>
      <div className="mt-8 text-2xl flex gap-8">
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(+num))}>
          incrementbyAmount
        </button>
        <button onClick={() => dispatch(decrementByAmount(+num))}>
          decrementByAmout
        </button>
      </div>
    </div>
  );
};

export default App;