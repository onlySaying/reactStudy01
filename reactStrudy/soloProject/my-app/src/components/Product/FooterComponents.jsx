import { useContext } from "react"
import { AuthContext } from "./security/AuthContext"

export default function FooterComponenet()
{
    const authContext = useContext(AuthContext)

    console.log(`Footer component - ${authContext.number}`)

    return(
        <div className='footer'>
            <div className = 'container'>
            <hr/> Footer
            </div>
        </div>
    )
}