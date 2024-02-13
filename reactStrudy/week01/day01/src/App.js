import { useState } from 'react';

function App() {
  const [message, setMessage] = useState("버튼을 클릭 하시오!");

  function handleClickBtn(event) {
    //message = "ssflkjasdflkjasdflk";
    setMessage('버튼을 클릭 했다!');
  }
  return (
    <div className="App">
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>Comstudy Coding Schools</h1>
        <p>Resize this responsive page to see the effect!</p> 
      </div>
      <div>
        <h3>스테이트 값 변경 연습</h3>
        <p>Message: {message}</p>
        <button onClick={handleClickBtn} className="btn btn-success">Change Message</button>
      </div>
    </div>
  );
}

export default App;
