import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import UserEmailVerification from '../UserEmailVerification/UserEmailVerification';


const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return;
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
    }

    if(!user.emailVerified){
        return <UserEmailVerification></UserEmailVerification>
    }

    return children;
};

export default RequireAuth;