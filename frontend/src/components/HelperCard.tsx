import { colors } from '@/theme'
import { Button, Card , Group, Image , Tooltip, Stack , Text, Badge} from '@mantine/core'
import { HelperCardType, User } from '../../types/model_types'
import api from '@/api'
import { useEffect, useState } from 'react'
import { useUser } from './UserInfoContext'
import classes from './styles/HelperCard.module.css'

// User.username
// User.location
// HelperRole.serv_type
// HelperRole.serv_desc
export interface HelperCardProps{
    data:HelperCardType
    onDelete?:() => void;
    onRecommend?:() => void;
}

export default function HelperCard({data, onDelete, onRecommend}:HelperCardProps) {
    const {currentUser, refreshUser} = useUser();
    const [allowDelete, setAllowDelete] = useState<boolean>();

    useEffect(() => {
            if (currentUser?.id === data.user?.id) {
                setAllowDelete(true);
            } else {
                setAllowDelete(false);
            }
        }, [currentUser, data.user?.id]);

    const recommend = async () => {
        try {
            const res = await api.post(`/api/recommend/${data.id}/`)
            onRecommend?.()
        } catch(error) {
            console.log(error)
        } finally {
            refreshUser()
        }
        
    }

    const deleteHelperCard = async () => {
        try {
            const res = await api.delete(`/api/helpers/${data.id}/`)
            console.log('Post deleted successfully:', res)
            onDelete?.(); // Trigger parent component refresh
        } catch(error) {
            console.error('Error deleting post:', error)
            // You might want to show a toast notification or alert here
        } finally {
            refreshUser()
        }
    }


    
    return(
        <>
            <Card
                withBorder
                className={classes.card}
            >
                <Group
                    className={classes.group}
                >
                    <Image
                        src={data.user?.profile_pic}
                        className={classes.image}
                    />
                
                <Stack className={classes.stack}> {/*pos="absolute" right={10}*/}
                    <Group>
                    <Text className={classes.username}>{data.user?.username}</Text> 
                    <Tooltip label="Gift Requests" position="bottom">
                            <Badge bg={colors["Moss Green"]} autoContrast circle>{data.recommendations || 0}</Badge>
                    </Tooltip>
                    </Group>
                    <Text className={classes.location}>{data.user?.location}</Text> 
                    <Text className={classes.serviceType}>{data.serv_type}</Text> 
                    <Text className={classes.serviceDescription} lineClamp={4}>{data.serv_desc}</Text> 
                    { !allowDelete &&<Button 
                        onClick={recommend}
                        className={classes.button}
                        bg={colors["Moss Green"]} 
                    >
                            RECOMMEND
                    </Button>
                    }

                    { allowDelete &&<Button 
                        onClick={deleteHelperCard}
                        className={classes.button}
                        bg={colors["Orange"]} 
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

