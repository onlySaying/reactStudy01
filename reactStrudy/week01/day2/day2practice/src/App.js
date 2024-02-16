import React, { useState } from 'react';
import "./App.css"

const InputItem = ({appendTodo}) => 
  {
    const[value, setValue] = useState("");

    const onchangeHandler = (e) =>
    {setValue(e.target.value)}
    const inputHandler = (e) =>
    {
      appendTodo(value);
      setValue("");
    }

    return (
      <div>
        <input value={value} onChange={onchangeHandler}></input>
        <button onClick={inputHandler}>입력</button>
      </div>    
      )
}

const Itemcomponent = ({item, exceptTodo, updateTodo}) => {

  let titleStyle = item.done ? "line-through" : "none";
  let isCheck = item.done ? "checked" : "";
  const [editValue, setEditValue] = useState(item.title);
  const onBoxchangeHandler = (e) => {updateTodo({no:item.no, title:item.title, done:!item.done});}
  const onDelClickHandler = (e) =>{ exceptTodo(item.no);}
  const onUpdateBTNHandler = (e) => {updateTodo({no:item.no, title:editValue, done:item.done});}

  return (<li>
    <input type='checkbox' checked={isCheck} onChange={onBoxchangeHandler} />
    <input style={{border:0, textDecoration:titleStyle}} type='text' 
    value={editValue} 
    onChange={e=>{setEditValue(e.target.value)}} onBlur={onUpdateBTNHandler} />
    <button onClick={onDelClickHandler}>삭제</button>
  </li>)
}

const ListComponent = ({todoList, exceptTodo , updateTodo}) => {
 
  return (<div>
    <ul>{todoList.map((item) => {
      return (<Itemcomponent key={item.no} item={item} exceptTodo={exceptTodo} updateTodo={updateTodo} />);
    })}</ul>
  </div>);
}

const TodoList = () =>
{
  const [value, setValue] = useState("dddd");
  const [todoList, setTodoList] = useState([
    {no:1, title:"치맥 하기", done:false},
    {no:2, title:"방 청소 하기", done:false},
    {no:3, title:"명상 하기", done:true},
    {no:4, title:"착한 일 하기", done:false}
  ]);
  
  const [cnt, setCnt] = useState(5);

  const appendTodo = (title) =>
  {
    let newTodo = {no:cnt, title:title, done:false};;
    setCnt(cnt+1);
    setTodoList([...todoList, newTodo]);
  }

  const exceptTodo = (no) =>
  {
    let index = todoList.findIndex(function(item)
    {
      return Number(no) == Number(item.no);
    });
    let newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  }

  const updateTodo = (newItem) =>
  {
    let index = todoList.findIndex(function (item){
      return Number(newItem.no) == Number(item.no);
    })

    if(index !== -1) {
      let newList = [...todoList];
      newList[index] = newItem;
      setTodoList(newList);
    }
  }


  return (
    <div>
      <div className='App-header'>
        <h1>Todo List</h1>
      </div>
      <main>
        <h2>welcome</h2>
        <InputItem appendTodo={appendTodo} />
        <hr/>
        <ListComponent todoList={todoList} exceptTodo={exceptTodo} updateTodo={updateTodo} />
      </main>
      
      <footer>
        (c)Comstudy21. since 2024.
      </footer>
    </div>
  )
}

const App = () =>{
  return(
    <div className = "App">
      <TodoList/>
    </div>
    
  )
}

export default App;