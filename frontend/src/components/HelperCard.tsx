import { colors } from '@/theme'
import { Button, Card , Group, Image , Space, Stack , Text} from '@mantine/core'
import { User } from '../../types/model_types'
import api from '@/api'
import { useEffect, useState } from 'react'
import { useUser } from './UserInfoContext'

// User.username
// User.location
// HelperRole.serv_type
// HelperRole.serv_desc
export interface HelperCardProps{
    user:User;
    serv_type:string;
    serv_desc:string;
    helper_id:number;
    onDelete?:() => void;

}

export default function HelperCard({helper_id, user, serv_type, serv_desc, onDelete}:HelperCardProps) {
    const {currentUser} = useUser();
    const [allowDelete, setAllowDelete] = useState<boolean>();

    useEffect(() => {
            if (currentUser?.id === user?.id) {
                setAllowDelete(true);
            } else {
                setAllowDelete(false);
            }
        }, [currentUser, user?.id]);

    const recommend = async () => {
        try {
            const res = await api.post(`/api/recommend/${helper_id}/`)
        } catch(error) {
            console.log(error)
        }
        
    }

    const deleteHelperCard = async () => {
        try {
            const res = await api.delete(`/api/helpers/${helper_id}/`)
            console.log('Post deleted successfully:', res)
            onDelete?.(); // Trigger parent component refresh
        } catch(error) {
            console.error('Error deleting post:', error)
            // You might want to show a toast notification or alert here
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
                    src={user?.profile_pic}
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
                    { !allowDelete &&<Button 
                        onClick={recommend}
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
                    }

                    { allowDelete &&<Button 
                        onClick={deleteHelperCard}
                        fullWidth 
                        radius={25} 
                        bg={colors["Orange"]} 
                        h={20} 
                        ff="Averia Gruesa Libre" 
                        fz={10} 
                        lts={1} 
                        p={3} 
                        fw={1}
                    >
                            DELETE
                    </Button>
}
                </Stack>
                </Group>
            </Card>
        </>
    )
};

