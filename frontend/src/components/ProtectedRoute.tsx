import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { useState, useEffect, ReactNode } from "react";

interface ProtectedRouteProps {
    children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null); // tracks the auth status

    //runs a function (once in this case) after the component renders.
    //auth checks auth any errors caught sets auth to false else auth() handles everything
    useEffect(() => {
        auth().catch(() => setIsAuthorized(false));
    }, []);

    //get refresh token adn generate access token
    const refreshToken = async () => {     
        const refreshToken = localStorage.getItem(REFRESH_TOKEN); //get the refresh token
        try {
            // post the refresh token to the refresh part int he backend api to get the access token
            const res = await api.post("/api/token/refresh/", {
                refresh: refreshToken,
            });
            // if successful store the access token from the response data
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
            }
        } catch (error) {
            console.log(error);
            setIsAuthorized(false);
        }
    };

    // get the access token
    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        // if no token then not authorized
        if (!token) {
            setIsAuthorized(false);
            return;
        }

        // decode token
        const decoded = jwtDecode<{ exp: number }>(token);
        // get expiration
        const tokenExpiration = decoded.exp;
        const now = Date.now() / 1000;
        // if expired then refresh token 
        if (tokenExpiration < now) {
            await refreshToken();
        } else {
            setIsAuthorized(true);
        }
    };

    // if auth is null load until token is authorized
    if (isAuthorized === null) {
        return <div>Loading...</div>;
    }

    // if authorized return children else go to login
    return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;

