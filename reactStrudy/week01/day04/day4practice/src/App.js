import { Button, Checkbox, FormControlLabel, Grid, List, ListItem, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css'

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
      <div class = "textcenter">
        <TextField value={value} onChange={onchangeHandler} style={{marginRight : '20px'}}
        TextField id="outlined-basic" label="input todo" variant="outlined"></TextField>
        <Fab color="primary" aria-label="add" onClick={inputHandler}><AddIcon/></Fab>
      </div>    
      )
  }

const Itemcomponent = ({item, exceptTodo, updateTodo}) => {

  let titleStyle = item.done ? "line-through" : "none";
  let isCheck = item.done ? "checked" : "";
  const [editValue, setEditValue] = useState(item.title);
  const [isModify, setIsModify] = useState(false);
  
  const onBoxchangeHandler = (e) =>  {updateTodo({no:item.no, title:item.title, done:!item.done});}
  const onDelClickHandler = (e) =>{ exceptTodo(item.no);}
 
  const onUpdateBTNHandler = (e) =>
  {
    setIsModify(!isModify);
    if(isModify) 
    {
      updateTodo({no:item.no, title:editValue, done:item.done});
    }
  }

  function modifyMode() {
    let tag = <label style={{textDecoration: titleStyle, display:"inline-block", width:"170px"}}>{item.title}</label>;
    if(isModify) {
      tag = <input type='text' 
      value={editValue} 
      onChange={e=>{setEditValue(e.target.value)}} />;
    } 
    return tag;
  }

  return(
    <div>
      <li class = "textcenter">
        <Grid container style={{marginTop:20}}>
          <Grid xs={6} md={6}>
          <input type='Checkbox' checked={isCheck} 
          onChange={onBoxchangeHandler} style={{marginRight : 10, marginBottom : 10}}/>
          {modifyMode()}
          </Grid>
          <Grid xs={1} md={1}>
          <Fab color="red" aria-label="DeleteIcon" onClick={onDelClickHandler}
          style={{marginRight : 10, marginBottom : 10}}><DeleteIcon/></Fab>
          </Grid>
          <Grid xs={1} md={1} >
          <Button onClick={onUpdateBTNHandler} style={{marginRight : 10, marginBottom : 10}}>
            {isModify ? "확인" : "수정"}</Button>
          </Grid>
        </Grid>
      </li>
    </div>
  ) 
}

const ListComponent = ({todoList, exceptTodo , updateTodo}) => {
 
  return (<div>
    <ul>{todoList.map((item) => {
      return (<Itemcomponent key={item.no} item={item} 
        exceptTodo={exceptTodo} updateTodo={updateTodo} />);
    })}</ul>
  </div>);
}

const TodoList = () =>
{
  const [value, setValue] = useState("dddd");
  const [todoList, setTodoList] = useState([
    {no:1, title:"서버 연결은 ", done:false},
    {no:2, title:"못하겠어요.", done:false},
    {no:3, title:"다음에 할게요 ㅠㅜ", done:false},
    {no:4, title:"리액트 공부하기", done:true}
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
      <div className='jumbotron text-center bg-dark text-white'>
        <h1>Todo List</h1>
      </div>
      <main>
        <h2>List입력</h2>
        <InputItem appendTodo={appendTodo} />
        <hr/>
        <ListComponent todoList={todoList} exceptTodo={exceptTodo} updateTodo={updateTodo} />
      </main>
      
      <footer>

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