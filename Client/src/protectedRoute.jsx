import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const {loading, isAuthenticathed} = useAuth();
    if(loading) return <h1>Loading...</h1>
    if(!loading && !isAuthenticathed) return <Navigate to='/' replace/>
    return(
        <div>
            <Outlet />
        </div>
    )
};

export default ProtectedRoute