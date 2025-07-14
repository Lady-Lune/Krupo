import { colors } from '@/theme';
import { PostorGift, Profile, Reply } from '../../types/model_types';
import { Avatar, Group, Stack, Text, } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import UserProfile from '@/popups/UserProfile';
import { getUserInfo } from './UserInfoContext';
import { useState } from 'react';
import classes from './styles/Replies.module.css';

interface RepliesProps {
    post: PostorGift;
}

const Replies = ({ post }: RepliesProps) => {
    const [profileOpened, { open: openProfile, close: closeProfile }] = useDisclosure(false);
    const [userProfile, setUserProfile] = useState<Profile | undefined>();
    
    const handleAvatarClick = async (replyUserId: number | undefined) => {
        if (!replyUserId) return;
        const user_profile = await getUserInfo(replyUserId.toString())
        setUserProfile(user_profile)
        console.log("open profile", user_profile)
        if (user_profile) {
            openProfile();
        }
        }
    

    if (post.replies) {
        return (
            <Stack className={classes.container}>
                {post.replies.map((reply, index) => (
                    <Group className={classes.replyGroup} key={`${reply.id}-${index}`}>
                        <Avatar 
                            size="xs"
                            src={reply.user?.profile_pic} 
                            alt={reply.user?.first_name ? `${reply.user.first_name}'s avatar` : 'User avatar'}
                            onClick={() => handleAvatarClick(reply.user?.id)}
                            className={classes.avatar}
                        />
                            <Text
                                className={classes.username}
                                truncate="end"
                                onClick={() => handleAvatarClick(reply.user?.id)}
                            >
                                {reply.user?.username || "None"}
                            </Text>
                            <Text
                                key={index}
                                className={classes.replyContent}
   
                                lineClamp={10}
                            >
                            {reply.content}
                        </Text>

                        {userProfile && (
                            <UserProfile 
                                opened={profileOpened}
                                onClose={closeProfile}
                                user={userProfile}
                            />
                        )}
                    </Group>
                ))}
            </Stack>
        );
    }
    return null;
}

export default Replies;