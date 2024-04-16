import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams} from 'react-router-dom';
import './TodoAppComponents.css'

export default function TodoApp()
{
    return(
        <div className = "TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path = '/' element = {<LoginComponent/>}></Route>
                    <Route path = '/login' element = {<LoginComponent/>}></Route>
                    <Route path = '/welcome/:username' element = {<WelcomeComponent/>}></Route>
                    <Route path = '*' element = {<ErroeComponenet/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent()
{
    const [username, setUsername] = useState('yi');
    const [password, setPassword] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const navigate = useNavigate();

    function handleUserNameChange(event)
    {
        setUsername(event.target.value);
    }

    function handleUserPwChange(event)
    {
        setPassword(event.target.value);
    }

    function handleSubmit()
    {
        if(username==='yi' && password === 'dummy')
        {
            console.log("Success");
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
            navigate('/welcome')
        }
        else
        {
            console.log("Fail");
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }



    return(
        <div className="Login">
            {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
            {showErrorMessage &&  <div className="errorMessage">Authenticated Failed.
            Please check your crendentials</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type = "text" name ="username" 
                    value={username} onChange={handleUserNameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type = "password" name ="password"
                    value = {password} onChange={handleUserPwChange} />
                </div>
                <div>
                    <button type = "button" name ="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent()
{
    const params = useParams();
    return (
        <div className= "WelcomeComponenet">
            welcome Component
        </div>
    )
}

function ErroeComponenet()
{
    return(
        <div className='ErrorComponent'>
            <h1>We are working really hard!</h1>
            <div>
                Apologies for the 404. Reach out to our team
            </div>
        </div>
    )
}