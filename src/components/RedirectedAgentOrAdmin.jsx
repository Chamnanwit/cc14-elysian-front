import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


export default function RedirectedAgentOrAdmin({children}) {
    // const { user, isAuthenticated, isLoading } = useAuth0();
    // const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const user = useSelector(state => state.auth?.user);
    // console.log("sssss", user)
    if (user?.role === "ADMIN") {
        return <Navigate to="/adminlogin" />;
    } else if (user.role === "AGENCY" && user.locked === false) return <Navigate to="/agent" />
    return children;
}
