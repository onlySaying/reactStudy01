import { List } from "@mui/material";
import Todo from "./Todo";
import { useState } from "react";
import AddTodo from "./AddTodo";

function App() {
  const[items, setItems] = useState([
    {id : 0, title : "밥 먹기", done : false},
    {id : 1, title : "잠 자기", done : false},
    {id : 2, title : "공부 하기", done : false},
    {id : 3, title : "약 먹기", done : true}
  ]);

  let todoItems = items.map((item) =>{
    // 중괄호 안에는 반드시 return 값이 있어야한다.
    return <Todo item ={item} key ={item.id}/>
  })
  return (
    <div>
      <h1>Todo List Item</h1>
      <AddTodo></AddTodo>
      <List>
        {
          todoItems
        }
      </List>
      
      
    </div>
  );
}

export default App;
