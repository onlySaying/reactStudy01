import { useState } from "react"

export default function TodoList()
{
    const [todos, setTodos] = useState([]);
    const [inputs, setInput] = useState("");
    const [doing, setdoing] = useState([]);

    const onChange = (event) => {
        setInput(event.target.value);
    }
    
    const addTodo =() => {
        setTodos([...todos, inputs]);
        setdoing([...doing, inputs]);
        setInput("");
    }
    var idx= 0
    const onDelete = (idx) =>
    {
        var newtodos = [...todos];
        newtodos.splice(idx, 1);
        setTodos(newtodos);
    }

    const onUpdate = (idx) =>
    {
        var newtodos = [...doing];
        setTodos(newtodos);
    }
    const onUpdateChange = (event, idx) =>
    {
        var newtodos = [...doing];
        newtodos[idx] = event.target.value;
        console.log(idx);
        console.log(event.target.value);
        setdoing(newtodos);
    }

    
    return(
        <>
            <ul>
            {       
                    doing.map((doing,idx) =>
                    <div>
                        
                        <textarea value={doing} onChange={(e)=>onUpdateChange(e,idx)}/> 
                        <button onClick = {() => onUpdate(idx)}>수정</button> 
                        <button onClick = {() => onDelete(idx)}>삭제</button>
                    </div>)
            }
            </ul>

            <div>
                <textarea value={inputs} onChange={onChange}></textarea> 
                <button onClick={addTodo}>추가</button>
            </div>

        </>
    )

  
}