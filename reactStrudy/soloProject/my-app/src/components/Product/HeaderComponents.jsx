import { useContext } from "react"
import {Link} from 'react-router-dom';
import { useAuth,AuthContext } from './security/AuthContext';

export default function HeaderComponenet()
{

    const authContext = useContext(AuthContext)
    const isAuthenticated = useContext(AuthContext).isAuthenticated

    function logout()
    {
        authContext.logout()
    }
    //console.log(authContext)
    console.log("isAuthenticated" + isAuthenticated)
    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.naver.com">Te</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                            {isAuthenticated &&
                            <Link className="nav-link" to="/buying">Buying</Link>}
                            </li>
                            <li className="nav-item fs-5">
                            {isAuthenticated &&
                            <Link className="nav-link" to="/selling">Selling</Link>}
                            </li>
                            <li className="nav-item fs-5">
                            {isAuthenticated &&
                            <Link className="nav-link" to="/Dealing">Dealing</Link>}
                            </li>
                            <li className="nav-item fs-5">
                            {isAuthenticated &&
                            <Link className="nav-link" to="/product">Products</Link>}
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5">
                            {!isAuthenticated &&
                            <Link className="nav-link" to="/login">Login</Link>}
                        </li>
                        <li className="nav-item fs-5">
                            {!isAuthenticated &&
                            <Link className="nav-link" to="/signup">signup</Link>}
                        </li>
                        <li className="nav-item fs-5">
                            {isAuthenticated &&
                            <Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>}
                        </li>
                        <li className="nav-item fs-5">
                            {isAuthenticated &&
                            <Link className="nav-link" to={`/resign/${authContext.id}`} onClick={logout}>resign</Link>}
                        </li>
                        <li className="nav-item fs-5">
                            {isAuthenticated &&
                            <Link className="nav-link" to={`/signup/${authContext.id}`}>Edit</Link>}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
}
