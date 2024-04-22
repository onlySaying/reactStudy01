import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children})
{
    
    //const [number, setNumber] = useState(10);

    const [isAuthenticated, setAuthenticated] = useState(false);

    //const valueToBeShard = {number, isAuthenticated, setAuthenticated}

    //setInterval(() => setNumber(number+1), 10000)

    function login(username, password)
    {
        if(username==='yi' && password === 'dummy')
        {
            setAuthenticated(true)
            return true
        }
        else
        {
            setAuthenticated(false)
            return false
        }
    }

    function logout()
    {
        setAuthenticated(false)
    }
    return (
        <AuthContext.Provider value ={{isAuthenticated, setAuthenticated, login}}>
            {children}
        </AuthContext.Provider>
    )
}