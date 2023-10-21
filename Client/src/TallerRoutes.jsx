import { useAuth } from "./context/AuthContext";
import { Outlet, Navigate} from "react-router-dom";

const TallerRoutes = () => {
    const { userType } = useAuth(); 
    if (userType == 'taller')    
    return(
        <div>
            <Outlet /> 
        </div>
    )
    else if (userType == 'empresa') return <Navigate to='/empresa-inicio'/>
};

export default TallerRoutes