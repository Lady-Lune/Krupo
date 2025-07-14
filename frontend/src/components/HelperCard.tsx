import { colors } from '@/theme'
import { Button, Card , Group, Image , Tooltip, Stack , Text, Badge} from '@mantine/core'
import { HelperCardType, Profile } from '../../types/model_types'
import api from '@/api'
import { useEffect, useState } from 'react'
import { getUserInfo, useUser } from './UserInfoContext'
import classes from './styles/HelperCard.module.css'
import UserProfile from '@/popups/UserProfile';
import { useDisclosure } from '@mantine/hooks'
import Alert from "@/components/Alert";


export interface HelperCardProps{
    data:HelperCardType
    onDelete?:() => void;
    onRecommend?:() => void;
}

export default function HelperCard({data, onDelete, onRecommend}:HelperCardProps) {
    const {currentUser, refreshUser} = useUser();
    const [allowDelete, setAllowDelete] = useState<boolean>();
    const [profile, setProfile] = useState<Profile|null>();
    const [profileOpened, { open: openProfile, close: closeProfile }] = useDisclosure(false);
    const [alertOpened, { open: openAlert, close: closeAlert }] = useDisclosure(false);

    const alertinfo = {
        title:"Confirm Delete",
        description:"This action cannot be undone"
    }

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


    const handleProfileClick = async () => {
        try {
            const userid = data.user?.id
            const userprofile = await getUserInfo(userid.toString())
            setProfile(userprofile)
            openProfile() // Only open after profile is fetched
        } catch (error) {
            console.error('Error fetching profile:', error)
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
                        onClick={handleProfileClick}
                    />
                
                <Stack className={classes.stack} 
                > 
                    <Group>
                    <Text onClick={handleProfileClick} className={classes.username}>{data.user?.username}</Text> 
                    <Tooltip label="Gift Requests" position="bottom">
                            <Badge bg={colors["Moss Green"]} autoContrast circle>{data.recommendations || 0}</Badge>
                    </Tooltip>
                    </Group>
                    <Text className={classes.location}>{data.user?.location}</Text> 
                    <Text className={classes.serviceType}>{data.serv_type}</Text> 
                    <Text className={classes.serviceDescription}>{data.serv_desc}</Text> 
                    { !allowDelete &&<Button 
                        onClick={recommend}
                        className={classes.button}
                        bg={colors["Moss Green"]} 
                    >
                            RECOMMEND
                    </Button>
                    }

                    { allowDelete &&<Button 
                        onClick={openAlert}
                        className={classes.button}
                        bg={colors["Orange"]} 
                    >
                            DELETE
                    </Button>
                    }
                </Stack>
                </Group>
            </Card>

            <Alert 
                modal={{alertopened:alertOpened, closealert:closeAlert}}
                alertinfo={alertinfo}
                button={{show:true, onClick:deleteHelperCard}}
            />

            
            {profile && 
                <UserProfile 
                    opened={profileOpened}
                    onClose={closeProfile}
                    user={profile}
                />
            }
        </>
    )
};

