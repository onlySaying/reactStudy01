import { useState } from "react";

export const Counter = () =>
{
    const [count , setCount] = useState({count : 0, name : "first"});
    const increment = () =>{
        //setCount(count+1);

        setCount(prevState => {return {count : prevState.count+1, name : prevState.name}});
        //setCount(prevState => prevState.count +1); 안됌
    }
    const decrement = () =>
    {
        setCount(prevState => {return {...prevState, count : prevState.count-1}});
    }
    return <div>
        <h1>{count.count}</h1>
        <button onClick ={increment}>increment</button>
        <button onClick={() => decrement()}>decrement</button>
    </div>
}

export default Counter;