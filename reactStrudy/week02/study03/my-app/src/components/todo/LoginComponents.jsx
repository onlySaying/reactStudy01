import { useState, useContext } from 'react'
import { useNavigate} from 'react-router-dom';
import { AuthContext } from "./security/AuthContext"

export default function LoginComponent()
{
    const [username, setUsername] = useState('yi');
    const [password, setPassword] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const navigate = useNavigate();

    const authContext = useContext(AuthContext)

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
        if(authContext.login(username,password))
        {
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
            navigate(`/welcome/${username}`)    
        }
        else
        {
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