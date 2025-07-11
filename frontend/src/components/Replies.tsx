import { colors } from '@/theme';
import { PostorGift, Profile, Reply } from '../../types/model_types';
import { Avatar, Group, Stack, Text, } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import UserProfile from '@/popups/UserProfile';
import { getUserInfo } from './UserInfoContext';
import { useState } from 'react';

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
            <Stack gap={0}  >
                {post.replies.map((reply, index) => (
                    <Group gap="sm" key={`${reply.id}-${index}`}>
                        <Avatar 
                            size="xs"
                            src={reply.user?.profile_pic} 
                            alt={reply.user?.first_name ? `${reply.user.first_name}'s avatar` : 'User avatar'}
                            onClick={() => handleAvatarClick(reply.user?.id)}
                            style={{ cursor: 'pointer' }}
                        />
                            <Text
                                fz={12}
                                w="10%"
                                truncate="end"
                                onClick={() => handleAvatarClick(reply.user?.id)}
                                style={{ cursor: 'pointer' }}
                            >
                                {reply.user?.username || "None"}
                            </Text>
                            <Text
                                key={index}
                                ff="Average Sans"
                                fz={12}
                                lh={1.25}
                                bg={colors["Pale-Yellow"]}
                                w="75%"
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