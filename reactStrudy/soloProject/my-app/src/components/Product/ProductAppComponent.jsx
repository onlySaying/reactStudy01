import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './ProductAppComponents.css'
import LogoutComponenet from './LogoutComponent'
import FooterComponenet from './FooterComponents';
import HeaderComponenet from './HeaderComponents';
import ListTodoComponents from './ListTodosComponents';
import ErrorComponenet from './ErrorComponents';
import WelcomeComponent from './WelcomeComponents';
import LoginComponent from './LoginComponents';
import AuthProvider, { useAuth } from './security/AuthContext';
import BuyingPrinting from './springServer/BuyingPrinting';
import SellingPrinting from './springServer/SellingPrinting';
import SignupComponents from './springServer/signupComponents';
import DealingPrinting from './springServer/DealingPrinting';
import ResignComponent from './springServer/ResignComponent';
import EditComponents from './springServer/EditComponents';
import ProductPrinting from './springServer/ProductPrinting';
import ProductDetail from './springServer/ProductDetail';

function AuthenticatedRoute({children})
{
    const authContext = useAuth()
    
    if(authContext.isAuthenticated)
    {
        return children;
    }

    return <Navigate to ="/"/>
}

export default function ProductApp()
{ 
    return(
        
        <div className = "TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponenet/>
                    <Routes>
                        <Route path = '/' element = {<LoginComponent/>}/>
                        <Route path = '/login' element = {<LoginComponent/>}/>
                        <Route path = '/signup' element = {<SignupComponents/>}/>
                        <Route path = '/logout' element = {<LogoutComponenet/>}/>
                        <Route path= '/resign/:userid' element={<ResignComponent/>}/> 
                        <Route path = '/welcome/:username' element = {
                        <AuthenticatedRoute>
                            <WelcomeComponent/>
                        </AuthenticatedRoute>
                        }/>
                         <Route path = '/signup/:username' element = {
                        <AuthenticatedRoute>
                            <EditComponents/>
                        </AuthenticatedRoute>
                        }/>
                        <Route path = '/todos' element = {
                        <AuthenticatedRoute>
                             <ListTodoComponents/>
                        </AuthenticatedRoute>
                       }/>
                        <Route path = '/Buying' element = {
                        <AuthenticatedRoute>
                            <BuyingPrinting/>
                        </AuthenticatedRoute>
                        }/>
                        <Route path = '/selling' element = {
                        <AuthenticatedRoute>
                            <SellingPrinting/>
                        </AuthenticatedRoute>
                        }/>
                        <Route path = '/dealing' element = {
                        <AuthenticatedRoute>
                            <DealingPrinting/>
                        </AuthenticatedRoute>
                        }/>
                        <Route path = '/product' element = {
                        <AuthenticatedRoute>
                            <ProductPrinting/>
                        </AuthenticatedRoute>
                        }/>
                        <Route path = '/product/:productId' element = {
                        <AuthenticatedRoute>
                            <ProductDetail/>
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