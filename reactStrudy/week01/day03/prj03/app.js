const http = require('http');
const express = require('express');
const app = express();

const todoList = [
    {id:1, title:"놀고 먹기", done:false},
    {id:2, title:"잠 자기", done:true},
    {id:3, title:"운동 하기", done:false}
];


app.get("/home", (req, res)=>{
    res.end("<h1>Hello world</h1>");
});

app.get('/todo', (req, res)=>{
    res.send(todoList);
});

const server = http.createServer(app);
server.listen(8088, ()=>{
    console.log("서버 실행 중 ...");
})