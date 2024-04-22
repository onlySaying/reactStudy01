import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './TodoAppComponents.css'
import LogoutComponenet from './LogoutComponent'
import FooterComponenet from './FooterComponents';
import HeaderComponenet from './HeaderComponents';
import ListTodoComponents from './ListTodosComponents';
import ErrorComponenet from './ErrorComponents';
import WelcomeComponent from './WelcomeComponents';
import LoginComponent from './LoginComponents';
import AuthProvider, { useAuth } from './security/AuthContext';

function AuthenticatedRoute({children})
{
    const authContext = useAuth()
    
    if(authContext.isAuthenticated)
    {
        return children;
    }

    return <Navigate to ="/"/>
}

export default function TodoApp()
{ 
    return(
        
        <div className = "TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponenet/>
                    <Routes>
                        <Route path = '/' element = {<LoginComponent/>}/>
                        <Route path = '/login' element = {<LoginComponent/>}/>
                        <Route path = '/welcome/:username' element = {
                        <AuthenticatedRoute>
                            <WelcomeComponent/>
                        </AuthenticatedRoute>
                        }/>
                        <Route path = '/todos' element = {
                        <AuthenticatedRoute>
                             <ListTodoComponents/>
                        </AuthenticatedRoute>
                       }/>
                        <Route path = '/logout' element = {
                        <AuthenticatedRoute>
                            <LogoutComponenet/>
                        </AuthenticatedRoute>
                        }/> 
                        <Route path = '*' element = {
                        <AuthenticatedRoute>
                            <ErrorComponenet/>
                        </AuthenticatedRoute>
                        }/>
                    </Routes>
                </BrowserRouter>
                <FooterComponenet/>
            </AuthProvider>
            
        </div>
    )
}