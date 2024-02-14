import { useEffect, useState } from "react";
import MyComponent from "./MyComponent";
function App()
{
    const [count, setCount] = useState(0);
    const onclickHandler = (e) =>{
        setCount(Number(count+1));
    }

    useEffect( () =>{
        console.log("component mounted");
        },
        []
    )
    useEffect( () =>{
        console.log("component update");
        },
        [count]
    )
    return (
        <>
            <h2>hello world</h2>
            <p>count : {count}</p>
            <button onClick={onclickHandler}>증가하기 </button>
            <MyComponent/>
        </>
    )
}

export default App;