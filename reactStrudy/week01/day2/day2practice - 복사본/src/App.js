import React, { useState } from 'react';
import "./App.css"

const InputItem = ({appendTodo}) => 
  {
    const[value, setValue] = useState("");

    const onchangeHandler = (e) =>
    {
        setValue(e.target.value)
    }
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

  return(
    <div>
      <li>
        <input type='checkbox' checked={isCheck} onChange={e=>{
        updateTodo({no:item.no, title:item.title, done:!item.done});
      }}/>
        <label style={{textDecoration: titleStyle}}>{item.title}</label>
        <button onClick={() =>
        { exceptTodo(item.no);}}>
        삭제</button>
        <button>수정</button>
      </li>
    </div>
  ) 
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
    {no:1, title:"서버 연결은 못하겠어요.", done:false},
    {no:2, title:"ㅠㅜ", done:false},
    {no:3, title:"공부 하기", done:true}
  ]);
  
  const [cnt, setCnt] = useState(1);

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
      <div className='jumbotron'>
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