import { colors } from '@/theme'
import { Button, Card , Group, Image , Space, Stack , Text ,TextInput , Textarea, Modal} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { useForm , hasLength} from "@mantine/form"
import api from '@/api';

// User.username
// User.location
// HelperRole.serv_type
// HelperRole.serv_desc

export default function HelperApplication() {
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
        console.log(values)
        try {
        const res = await api.post("/api/helpers/", 
            { 
                serv_type:values.serv_type,
                serv_desc:values.serv_desc,
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
            <Card
                // w={400}
                // h={200}
                w={{
                    base:400,
                    sm:300
                }}
                h={{
                    base:200
                }}
                withBorder
                bd="3px solid hsl(185, 21%, 45%)"
                bg="#F9F9EF"
                radius={25}
                p="md"
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
                <Stack gap={3}  > {/*pos="absolute" right={10} w={"60%"} w={"100%"} */}
                    <Text size='sm' p="0 3">Username</Text> {/*size='md' w={265}*/}
                    <Text size='sm' p="0 3">Location</Text> {/*size='sm' w={265}*/}
                    <TextInput 
                        size='sm' 
                        placeholder='Job'
                        key={form.key('serv_type')}
                        {...form.getInputProps('serv_type')}
                    /> {/*size='sm' w={265}*/}
                    <Textarea 
                        size='sm' 
                        placeholder='Description'
                        key={form.key('serv_desc')}
                        {...form.getInputProps('serv_desc')}
                    /> {/*size='sm' w={265}*/}
                    <Button 
                        fullWidth 
                        radius={25} 
                        bg={colors["Moss Green"]} 
                        h={25} ff="Averia Gruesa Libre" 
                        fz={13} 
                        lts={1} 
                        p={3} 
                        fw={1}
                        onSubmit={handleSubmit}
                    >BECOME HELPER</Button>
                </Stack>
                {/* </Group> */}
            </Card>
        </>
    )
};