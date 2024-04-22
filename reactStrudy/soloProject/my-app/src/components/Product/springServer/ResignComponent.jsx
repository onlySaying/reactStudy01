import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../security/AuthContext';

export default function ResignComponent() {
    const authContext = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const resignUser = async () => {
            try {
                const response = await fetch(`http://localhost:8080/resign/${authContext.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                
                setSuccess(true);
            } catch (error) {
                setError(error.message);
            }
        };

        // Only run the effect if authContext.id changes
        if (authContext.id) {
            resignUser();
        }
    }, [authContext.id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (success) {
        return (
            <div className="ResignComponent">
                <h1>You are resigned!</h1>
                <div>Thank you for using our App.</div>
            </div>
        );
    }

    return <div>Resigning...</div>;
}