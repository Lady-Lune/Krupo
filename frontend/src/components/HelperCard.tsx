import { colors } from '@/theme'
import { Button, Card , Group, Image , Space, Stack , Text} from '@mantine/core'
import { User } from '../../types/model_types'
import api from '@/api'

// User.username
// User.location
// HelperRole.serv_type
// HelperRole.serv_desc
export interface HelperCardProps{
    user:User;
    serv_type:string;
    serv_desc:string;
    helper_id:number

}

export default function HelperCard({helper_id, user, serv_type, serv_desc}:HelperCardProps) {
    const handleClick = async () => {
        try {
            const res = await api.post(`/api/recommend/${helper_id}/`)
        } catch(error) {
            console.log(error)
        } finally {
            console.log(`/recommend/${helper_id}/`)
        }
        
    }
    
    return(
        <>
            <Card
                withBorder
                bd="3px solid hsl(185, 21%, 45%)"
                bg="#F9F9EF"
                radius={25}
            >
                <Group
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
                <Stack gap={0.5} h="90%" w="75%" p="0 0 0 85"> {/*pos="absolute" right={10}*/}
                    <Text size='md' >{user?.username}</Text> {/*w={265}*/}
                    <Text size='xs' >{user?.location}</Text> {/*w={265}*/}
                    <Text size='sm' >{serv_type}</Text> {/*w={265}*/}
                    <Text size='sm'  lineClamp={4}>{serv_desc}</Text> {/*w={265}*/}
                    <Button 
                        onClick={handleClick}
                        fullWidth 
                        radius={25} 
                        bg={colors["Moss Green"]} 
                        h={20} 
                        ff="Averia Gruesa Libre" 
                        fz={10} 
                        lts={1} 
                        p={3} 
                        fw={1}
                    >
                            RECOMMEND
                    </Button>
                </Stack>
                </Group>
            </Card>
        </>
    )
};

