import {colors} from '@/theme'
import {
    Button,
    ComboboxData,
    // Checkbox,
    Container,
    Image,
    NativeSelect,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
  } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useForm } from '@mantine/form';
import api from '@/api';
import { districts , LOCATIONS } from '@/locations';
import { useState } from "react";

const Register = () => {
    type Division = {
        divcode: string;
        division: string;
    };

    const [location, setLocation] = useState<string>();
    const [divOptions, setDivOptions] = useState<ComboboxData>(LOCATIONS["Colombo"]);

    const changedivoptions = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const district = event.target.value;
        let divchoicearray = LOCATIONS[district];
        setDivOptions(divchoicearray);
    };

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      location: ''
    },

    validate: {
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

    const handleSubmit = async () => {
        const values = form.getValues();
        try {
        const res = await api.post("/api/users/", 
            { 
                username : values.username, 
                password : values.password,
                location : values.location,
            })
            // redirect /login
        } catch (error) {
            alert(error)
        } finally {
            // add a finally block
        };
    }

    return(
        <>
            {/* HEADER without Avatar and MainTabs */}
            <Container 
                style={{ 
                    height:150,
                    alignContent:"space-around"
                    }}
            >
                <Image 
                    src="src\assets\ComboLogo_-_Color_-_B-removebg-preview.svg"
                    fit="scale-down"
                    height={100}
                />
            </Container >


            <Container size={420} my={40} >

                <Title ta="center"> Welcome! </Title>

                <Text ta="center" mt={5}> Have an account? <Link to="/login">Login</Link></Text>

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

                    <NativeSelect 
                        label="District"
                        onChange={changedivoptions}
                    >
                    {districts.map(
                        (district) => (
                            <option key={district.discode}>
                                {district.district}
                            </option>
                        ) //option value defaults to the innerHTML text
                    )}
                    </NativeSelect>

                    <NativeSelect 
                        label="Division"
                        data={divOptions}
                        key={form.key('location')} 
                        {...form.getInputProps('location')}
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
                    JOIN KRUPO
                    </Button>
                </Paper>
            </Container>
        </>
    )
};

export default Register;