import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Profile from "./components/Profile";
import About from "./components/About";
import Counter from "./components/Counter";
import UserList from "./components/UserList"

// 만약 Routes를 불러 오지 못하면 
// npm uninstall react-router-dom 으로 모듈 삭제 후
// npm install react-router react-router-dom 으로 재 설치





function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/Counter">Counter</Link>
          </li>
          <li>
            <Link to = "/UserList">User</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/Home" element={<Home />} ></Route>
        <Route path="/About" element={<About />} ></Route>
        <Route path="/Gallery" element={<Gallery />} ></Route>
        <Route path="/Profile" element={<Profile />} ></Route>
        <Route path="/Counter" element={<Counter />} ></Route>
        <Route path="/UserList" element={<UserList />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;