import { useState } from "react";

function App() {
    const [fruits, setFruits] = useState([]);
    const [inputVal, setInputVal] = useState("");
    const btnClickHandler = function(e) {
        setFruits([...fruits, inputVal]);
    }
    return (<>
        <h1>Hello world</h1>
        <div>
            <input onChange={(e)=>{setInputVal(e.target.value)}} type="text" value={inputVal} />
            <button onClick={btnClickHandler}>추가하기</button>
        </div>
        <div>
            <ul>
               {fruits.map(function(value, index) {
                    return <li key={index}>{value}</li>
               })} 
            </ul>
        </div>
    </>);
}
