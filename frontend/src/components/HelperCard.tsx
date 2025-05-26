import { colors } from '@/theme'
import { Button, Card , Group, Image , Space, Stack , Text} from '@mantine/core'
import { HelperCardProps } from '../../types/types'
import { useForm } from "@mantine/form"

// User.username
// User.location
// HelperRole.serv_type
// HelperRole.serv_desc

export default function HelperCard({username, location, serv_type, serv_desc}:HelperCardProps) {
    
    return(
        <>
            <Card
                withBorder
                bd="3px solid hsl(185, 21%, 45%)"
                bg="#F9F9EF"
                radius={25}
            >
                <Group
                    // w={100}
                    // flex={2}
                    // bd="1px solid black"
                    justify='center'
                >
                 <Image
                    src="src\assets\Logo - Color - W (2).png"
                    radius={25}
                    bd="1px solid hsl(185, 21%, 45%)"
                    w="30%"
                    h="85%"
                    pos="absolute"
                    left={10}
                />
                <Stack gap={0.5}  h="90%"> {/*pos="absolute" right={10}*/}
                    <Text size='md' >{username}</Text> {/*w={265}*/}
                    <Text size='xs' >{location}</Text> {/*w={265}*/}
                    <Text size='sm' >{serv_type}</Text> {/*w={265}*/}
                    <Text size='sm'  lineClamp={4}>{serv_desc}</Text> {/*w={265}*/}
                    {/* <Space h={10}/> */}
                    <Button fullWidth radius={25} bg={colors["Moss Green"]} h={20} ff="Averia Gruesa Libre" fz={10} lts={1} p={3} fw={1}>RECOMMEND</Button>
                </Stack>
                </Group>
            </Card>
        </>
    )
};

