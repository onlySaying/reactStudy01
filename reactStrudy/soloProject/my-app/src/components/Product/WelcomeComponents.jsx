import {useParams, Link} from 'react-router-dom';

export default function WelcomeComponent()
{
    const {username} = useParams();
    return (
        <div className= "WelcomeComponenet">
            <h1> welcome {username}</h1>
            <div>
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
        </div>

    )
}