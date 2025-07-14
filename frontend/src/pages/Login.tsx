import {colors} from '@/theme'
import {
    Button,
    Container,
    Image,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
  } from '@mantine/core';
import { Link , Navigate } from 'react-router-dom';
import { useForm } from '@mantine/form';
import { ACCESS_TOKEN , REFRESH_TOKEN, USER } from '@/constants';
import api from '@/api';
import { jwtDecode } from "jwt-decode";
import classes from './styles/Login.module.css'


const Login = () => {
    const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },

    validate: {
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  const handleSubmit = async () => {
    const values = form.getValues();
    try {
    const res = await api.post("/api/token/", 
        { 
            username : values.username, 
            password : values.password,
        })
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);

        const decoded = jwtDecode<{ user_id:number }>(res.data.access);
        localStorage.setItem(USER, `${decoded.user_id}`);


        window.location.href = "/home";
    } catch (error) {
      alert(error)
    } finally {
        // add finallly block
    };
  }
    return(
        <>
        {/* HEADER without Avatar and MainTabs */}
        <Container className={classes.headerContainer}>
            <Image 
                src="src\assets\ComboLogo_-_Color_-_B-removebg-preview.svg"
                fit="scale-down"
                className={classes.logo}
            />
        </Container >
        
        {/* FORM */}
        <Container className={classes.formContainer}>
            <Title className={classes.title}> 
                Welcome back!
            </Title>

            <Text className={classes.subtitle}>
                Do not have an account yet? <Link to="/register">Create account</Link>
            </Text>

            <Paper withBorder shadow="sm" className={classes.paper}>
                <TextInput 
                    label="Username" 
                    placeholder="Username" 
                    required 
                    radius="md" 
                    key={form.key('username')} 
                    {...form.getInputProps('username')}
                />

                <PasswordInput 
                    label="Password" 
                    placeholder="Your password" 
                    required 
                    className={classes.passwordInput}
                    key={form.key('password')} 
                    {...form.getInputProps('password')}
                />

                <Button 
                    className={classes.button}
                    bg={colors["Moss Green"]}  
                    onClick={handleSubmit}
                > 
                SIGN IN
                </Button>
            </Paper>
        </Container>
        </>
    )
};

export default Login;