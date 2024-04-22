import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [id , setUserID] = useState(0);

    async function login(username, password) {
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId: username, password: password })
            });
            const data = await response.json();
            console.log(data);
            if (response.ok && data) {
                console.log("dddd");

                setUserID(data);
                console.log(id);

                setAuthenticated(true);
                return true;
            } else {
                setAuthenticated(false);
                return false;
            }
        } catch (error) {
            console.error('Error:', error.message);
            setAuthenticated(false);
            return false;
        }
    }

    function logout() {
        setAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, id }}>
            {children}
        </AuthContext.Provider>
    );
}