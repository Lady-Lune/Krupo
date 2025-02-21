import "../styles/Form.css"
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { redirect } from "react-router-dom";
import { useState } from "react";


function Login() {

    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await api.post("/api/token/", 
                { 
                    username : username, 
                    password : password,
                })
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                redirect("/")
            } catch (error) {
            alert(error)
        } finally {
    };
    }
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>Login</h1>
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button className="form-button" type="submit">
                Login
            </button>
        </form>
    );
}
export default Login;