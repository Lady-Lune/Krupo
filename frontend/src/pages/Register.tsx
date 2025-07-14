import {colors} from '@/theme'
import styles from './styles/Register.module.css'
import {
    Button,
    ComboboxData,
    Container,
    Image,
    NativeSelect,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
    Stepper,
    FileInput,
    Group,
    Space,
    Fieldset,
    Stack
  } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, isEmail, hasLength, matches } from '@mantine/form';
import api from '@/api';
import { districts , LOCATIONS } from '@/locations';
import { useState } from "react";

interface FormValues {
      username: string;
      password: string;
      location?: string;
      profile_pic: File | null;
      first_name?: string;
      last_name?: string;
      email?: string;
      fb_account?: string;
      ig_account?: string;
}

const Register = () => {

    const [divOptions, setDivOptions] = useState<ComboboxData>(LOCATIONS["Colombo"]);

    const changedivoptions = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const district = event.target.value;
        let divchoicearray = LOCATIONS[district];
        setDivOptions(divchoicearray);
    };

    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const cameraicon =  <> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
                        </svg>
                        </>
    
    const emailicon =  <> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
                        </svg>
                        </>

    const fbicon =      <> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                        </svg>
                        </>

    const igicon =      <> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                        </svg>
                        </>


  const form = useForm<FormValues>({
    initialValues: {
      username: '',
      password: '',
      location: 'COL0',
      profile_pic:null,
      first_name:'',
      last_name:'',
      email:'',
      fb_account:'',
      ig_account:''
    },

    validate: {
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
      email: isEmail('Invalid email'),
      first_name: hasLength({ min: 2, max: 10 }, 'Name must be 2-10 characters long'),
      last_name: hasLength({ min: 2, max: 10 }, 'Name must be 2-10 characters long'),
      fb_account: matches(/^https?:\/\/(www\.)?facebook\.com\/((profile\.php\?id=\d+)|([A-Za-z0-9\.]+))\/?$/,'Invalid Facebook Account URL'),
      ig_account: matches(/^https?:\/\/(www\.)?instagram\.com\/([a-zA-Z0-9._]+)\/?$/,'Invalid Instagram Account URL')

    //   put restrictions on firstname last name character length
    },
  });

    const navigate = useNavigate();

    const handleSubmit = async () => {
        const values = form.getValues();
        const formData = new FormData();

        formData.append("username" , values.username)
        formData.append("password" , values.password)
        values.location && formData.append("location" , values.location)
        values.first_name && formData.append("first_name" , values.first_name)
        values.last_name && formData.append("last_name" , values.last_name)
        values.email && formData.append("email" , values.email)
        values.fb_account && formData.append("fb_account" , values.fb_account)
        values.ig_account && formData.append("ig_account" , values.ig_account)
        if (values.profile_pic && values.profile_pic instanceof File) {
            formData.append('profile_pic', values.profile_pic);
        }

        try {
            const res = await api.post("/api/users/", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        } catch (error) {
            console.log(error);
        } finally {
            navigate("/login");
        }
    }

    return(
        <>
            {/* HEADER without Avatar and MainTabs */}
            <Container className={styles.headerContainer}>
                <Image 
                    src="src\assets\ComboLogo_-_Color_-_B-removebg-preview.svg"
                    fit="scale-down"
                    className={styles.logo}
                />
            </Container >


            <Container size={420} my={40} className={styles.container}>

                <Title className={styles.title}> Welcome! </Title>

                <Text className={styles.subtitle}> Have an account?<Link to="/login">Login</Link></Text>

                <Paper withBorder shadow="sm" className={styles.paper}> 
                    {/* bg={colors["Dark Skintone-d3"]} mt={30} radius="md" ta="center"*/}
                <Stepper active={active} onStepClick={setActive} size="xs" className={styles.stepper}>
                    <Stepper.Step >
                        <Stack className={styles.stack}>
                            <TextInput 
                                className={styles.input}
                                label="Username" 
                                placeholder="Username" 
                                required
                                radius="md"
                                key={form.key('username')} 
                                {...form.getInputProps('username')}
                            />

                            <PasswordInput 
                                className={styles.passwordInput}
                                label="Password" 
                                placeholder="Password" 
                                required 
                                radius="md" 
                                key={form.key('password')} 
                                {...form.getInputProps('password')}
                            />

                            <NativeSelect 
                                required
                                className={styles.input}
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
                                required
                                className={styles.input}
                                label="Division"
                                data={divOptions}
                                key={form.key('location')} 
                                {...form.getInputProps('location')}
                            />
                            <Button
                                className={styles.nextButton}
                                onClick={nextStep}
                            > 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                            </Button>
                            <Button 
                                fullWidth 
                                className={styles.joinButton}
                                radius="md" 
                                // bg={colors["Moss Green"]}  
                                ff="Averia Gruesa Libre"  
                                lts={1} 
                                p={3} 
                                fw={1} 
                                onClick={handleSubmit}
                            > 
                            JOIN KRUPO
                            </Button>
                        </Stack>
                        
                    </Stepper.Step>
                    <Stepper.Step>
                        <Group grow className={styles.inputGroup}>
                            <TextInput 
                                className={styles.textInput}
                                placeholder="First Name" 
                                radius="md"
                                key={form.key('first_name')} 
                                {...form.getInputProps('first_name')}
                            />
                            <TextInput 
                                className={styles.textInput}
                                placeholder="Last Name" 
                                radius="md" 
                                key={form.key('last_name')} 
                                {...form.getInputProps('last_name')}
                            />
                        </Group>
                            <Space h="xs"/>
                            <FileInput
                                className={styles.fileInput}
                                leftSection={cameraicon}
                                placeholder="Profile Pic"
                                key={form.key("profile_pic")}
                                {...form.getInputProps("profile_pic")}
                                //"src\assets\Logo - Color - W (2).png"
                            />
                            <Space h="xs"/>
                            <Fieldset className={styles.fieldset} ta="left" variant='' legend="Contact info" bg={colors["Dak Skintone-d2"]}>
                            <TextInput 
                                className={styles.textInput}
                                leftSection={emailicon}
                                placeholder="Email" 
                                radius="md" 
                                key={form.key('email')} 
                                {...form.getInputProps('email')}
                            />
                            <Space h="xs"/>
                            <TextInput 
                                className={styles.textInput}
                                leftSection={fbicon}
                                placeholder="Facebook" 
                                radius="md" 
                                key={form.key('fb_account')} 
                                {...form.getInputProps('fb_account')}
                            />
                            <Space h="xs"/>
                            <TextInput 
                                className={styles.textInput}
                                leftSection={igicon}
                                placeholder="Instagram" 
                                radius="md" 
                                key={form.key('ig_account')} 
                                {...form.getInputProps('ig_account')}
                            />
                            </Fieldset>
                            <Space h="xs"/>
                            <Button 
                                fullWidth
                                className={styles.prevButton}
                                radius="md" 
                                fw={1} 
                                autoContrast
                                onClick={prevStep}
                            > 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                            </svg>
                            </Button>
                            <Space h="xs"/>
                            <Button 
                                fullWidth 
                                className={styles.joinButton}
                                radius="md" 
                                // bg={colors["Moss Green"]}  
                                ff="Averia Gruesa Libre"  
                                lts={1} 
                                p={3} 
                                fw={1} 
                                onClick={handleSubmit}
                            > 
                            JOIN KRUPO
                            </Button>
                    </Stepper.Step>
                    <Stepper.Completed>
                        Completed, click back button to get to previous step
                    </Stepper.Completed>
                    </Stepper>
                    </Paper>
            </Container>
        </>
    )
};

export default Register;