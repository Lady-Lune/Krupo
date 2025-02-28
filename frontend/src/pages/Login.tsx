import "../styles/Form.css"
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { redirect } from "react-router-dom";
import { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";


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
                redirect("/");
            } catch (error) {
            alert(error)
        } finally {
    };
    }
    return (
        <Box
        sx={{
            justifyItems:"center",
            alignContent:"center",
            height:"100vh",
        }}>
        <Box component="form" onSubmit={handleSubmit}
        sx={{
            display:"grid",
            border: "solid white 1px",
            justifyItems:"center",
            maxWidth:"fit-content",
            height:"50vh",
        }}>
            <Typography variant="h2">
                Login
            </Typography>
            <TextField
                required
                label="Required"
                type="text"
                value={username}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <TextField
                required
                label="Required"
                type="password"
                value={password}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <Button variant="contained" color="success">
                Login
            </Button>
        </Box>
        </Box>
    );
}
export default Login;