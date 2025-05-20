import {colors} from '@/theme'
import {
    Button,
    // Checkbox,
    Container,
    // Group,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
  } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useForm } from '@mantine/form';
import { ACCESS_TOKEN , REFRESH_TOKEN } from '@/constants';
import api from '@/api';


const Form = () => {

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

    } catch (error) {
      alert(error)
    } finally {
      // add a finally block
    };
  }


  return (
    <Container size={420} my={40} >
      <Title ta="center"> 
        Welcome back!
      </Title>

      <Text ta="center" mt={5}>
        Do not have an account yet? <Link to="/register">Create account</Link>
      </Text>

      <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
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
          mt="md" 
          radius="md" 
          key={form.key('password')} 
          {...form.getInputProps('password')}
        />

        <Button 
          fullWidth 
          mt="xl" 
          radius="md" 
          bg={colors["Moss Green"]}  
          ff="Averia Gruesa Libre"  
          lts={1} 
          p={3} 
          fw={1} 
          onClick={handleSubmit}
        > 
          SIGN IN
        </Button>
      </Paper>
    </Container>
  );
}

export default Form;
