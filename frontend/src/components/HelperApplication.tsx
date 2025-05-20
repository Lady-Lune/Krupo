import { colors } from '@/theme'
import { Button, Card , Group, Image , Space, Stack , Text ,TextInput , Textarea, Modal} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
// User.username
// User.location
// HelperRole.serv_type
// HelperRole.serv_desc

export default function HelperApplication() {
    const [opened, {open, close}] = useDisclosure(true);
    
    return(
        <>
            <Modal opened={opened} onClose={close} variant="">
            <Card
                w={400}
                h={200}
                withBorder
                bd="3px solid hsl(185, 21%, 45%)"
                bg="#F9F9EF"
                radius={25}
            >
                <Group
                    dir='column'
                    w={100}
                    flex={2}
                >
                 <Image
                    src="src\assets\Logo - Color - W (2).png"
                    radius={5}
                    bd="1px solid hsl(185, 21%, 45%)"
                />
                 <Stack gap={3} pos="absolute" right={10}>
                    <Text size='md' w={265} p="0 3">Username</Text>
                    <Text size='sm' w={265} p="0 3">Location</Text>
                    <TextInput size='sm' w={265} placeholder='Job'></TextInput>
                    <Textarea size='sm' w={265} placeholder='Description'></Textarea>
                    <Space h={5}/>
                    <Button fullWidth radius={25} bg={colors["Moss Green"]} h={25} ff="Averia Gruesa Libre" fz={13} lts={1} p={3} fw={1}>BECOME HELPER</Button>
                </Stack>
                </Group>
            </Card>
            </Modal>
        </>
    )
};