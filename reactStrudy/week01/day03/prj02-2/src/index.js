import ReactDOM from "react-dom/client";
import { initializeApp } from 'firebase/app';
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
const root = ReactDOM.createRoot(document.getElementById("root"));

const firebaseConfig = {
  apiKey: "AIzaSyAWvzBbGyOghy15PWcd-DjadVMPh85T3eM",
  authDomain: "todolist-d0238.firebaseapp.com",
  databaseURL: "https://todolist-d0238-default-rtdb.firebaseio.com",
  projectId: "todolist-d0238",
  storageBucket: "todolist-d0238.appspot.com",
  messagingSenderId: "352087103396",
  appId: "1:352087103396:web:8f03ea78bcca7743f81331",
  measurementId: "G-ECB2M9VNHF"
};

const App = ()=> {
    
  async function getTodoList(db) {
      const todoListCol = collection(db, 'todolist');
      const todoListSnapshot = await getDocs(todoListCol);
      const todoList = todoListSnapshot.docs.map(doc => {
          const data = doc.data();
          data.id =doc.id;
          return data;
      });
      return todoList;
  }
  const app =  initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [todoList, setTodoList] = useState([]);
  getTodoList(db).then((result)=>{
      setTodoList(result);
  })
  return (<>
      <h1>Todo List</h1>
      <ul>
          {todoList.map((item, i) => <li key={i}>{item.title}</li>) }
      </ul>
  </>);
}

root.render(<App />);