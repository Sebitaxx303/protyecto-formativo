import { useAuth } from "./context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

const EmpresaRoutes = () => {
    const { userType  } = useAuth(); 
    if (userType =='empresa')
    return(
        <div>
            <Outlet/> 
        </div>
    )
    else return <Navigate to='/taller-inicio' replace />
};

export default EmpresaRoutes