import { colors } from '@/theme'
import styles from './styles/HelperApplication.module.css'
import { Button, Card, Stack , Text ,TextInput , Textarea,} from '@mantine/core';
import { useForm , hasLength} from "@mantine/form"
import api from '@/api';
import { useUser } from '@/components/UserInfoContext';

// User.username
// User.location
// HelperRole.serv_type
// HelperRole.serv_desc

interface HelperApplicationProps {
    onSuccess?: () => void;
}

export default function HelperApplication({ onSuccess }: HelperApplicationProps) {

    const { currentUser, refreshUser} = useUser(); // Access context data here

    
    const form = useForm({
    initialValues: {
            serv_type:'',
            serv_desc:''
        },
        validate: {
            serv_type: hasLength({ min: 2, max: 100 }, 'Input must be between 2-100'),
            serv_desc: hasLength({ min: 2, max: 300 }, 'Input must be between 2-300'),
        }
    });

    const handleSubmit = async () => {
        const values = form.getValues();
        // console.log(values)
        try {
        const res = await api.post("/api/helpers/", 
            { 
                serv_type:values.serv_type,
                serv_desc:values.serv_desc,
            })
            form.reset();
            onSuccess?.();
            // redirect /login
        } catch (error) {
            alert(error)
        } finally {
            refreshUser();
        };
    }
    
    return(
        <>
            <Card
                className={styles.card}
                w={{
                    base:400,
                    sm:300
                }}
                h={{
                    base:200
                }}
                withBorder
            >
                {/* <Group
                    // dir='column'
                    // w={"25%"}
                    flex={2}
                > */}
                 {/* <Image
                    src="src\assets\Logo - Color - W (2).png"
                    radius={5}
                    bd="1px solid hsl(185, 21%, 45%)"
                    fit="scale-down"
                    w={"30%"}
                /> */}
                <Stack className={styles.stack}> {/*pos="absolute" right={10} w={"60%"} w={"100%"} */}
                    <Text className={styles.text}>
                        {currentUser? currentUser?.username:"------"}    
                    </Text> {/*size='md' w={265}*/}
                    
                    <Text className={styles.text}>
                        {currentUser? currentUser?.location:"------"} 
                    </Text> {/*size='sm' w={265}*/}

                    <TextInput 
                        className={styles.input}
                        placeholder='Job'
                        key={form.key('serv_type')}
                        {...form.getInputProps('serv_type')}
                    /> {/*size='sm' w={265}*/}
                    <Textarea 
                        className={styles.textarea}
                        placeholder='Description'
                        key={form.key('serv_desc')}
                        {...form.getInputProps('serv_desc')}
                    /> {/*size='sm' w={265}*/}
                    <Button 
                        fullWidth 
                        className={styles.submitButton}
                        bg={colors["Moss Green"]} 
                        onClick={handleSubmit}
                    >BECOME HELPER</Button>
                </Stack>
                {/* </Group> */}
            </Card>
        </>
    )
};