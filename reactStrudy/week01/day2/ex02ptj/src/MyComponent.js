import { useEffect, useState } from "react";

function MyComponent() {
    const [inputValue, setInputValue] = useState("");
  
    useEffect(() => {
      console.log("1. mount ...");
  
      return (()=>{
        console.log("3. will unmount ...");
      });
    }, []);
  
    useEffect(()=>{
      console.log("2. inputValue update ...");
    }, [inputValue]);
  
    const handleChange = (e)=>{
      setInputValue(e.target.value);
    }
  
    const handleClick = (e) => {
      console.log(inputValue);
      setInputValue("");
    }
  
    return (<>
      <h2>Hello world!</h2>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>확인</button>
      <p>결과: {inputValue}</p>
    </>);
  }

  export default MyComponent;