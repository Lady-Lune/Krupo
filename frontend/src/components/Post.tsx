import { Avatar, Card, Image, Text, AspectRatio, Pill, PillGroup, Space } from "@mantine/core"
import { colors } from "@/theme"
import PostHead from "./PostHead"
import { PostorGift, Profile } from "../../types/model_types";
import { getUserInfo, useUser } from "./UserInfoContext";
import { useState, useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import UserProfile from "@/popups/UserProfile";
import ReplySection from "./ReplySection";
import api from "@/api";
import classes from './styles/Post.module.css'

export interface PostProps {
    post: PostorGift
    post_or_gift:"post" | "gift";
    onDelete?: () => void;
}



const Post = ({post, post_or_gift, onDelete}:PostProps) => {

    const [profileOpened, { open: openProfile, close: closeProfile }] = useDisclosure(false);
    const [postUserProfile, setPostUserProfile] = useState<Profile | undefined>();
    const {currentUser, refreshUser} = useUser();
    const [displayDelete, setDisplayDelete] = useState<string>("none"); //"none" | "block"


    const handleClick = async () => {
        console.log(post_or_gift)
        const postuser_profile = await getUserInfo(post.user?.id.toString())
        setPostUserProfile(postuser_profile)
        if (postuser_profile) {
            openProfile();
        }
    }

    // Check if current user is the owner of the post
    useEffect(() => {
        if (currentUser?.id === post.user?.id) {
            setDisplayDelete("block");
        } else {
            setDisplayDelete("none");
        }
    }, [currentUser, post.user?.id]);

    const url = post_or_gift=="post"? `/api/posts/${post.id}/`:`/api/gifts/${post.id}/`

    const deletePost = async () => {
        try {
            const res = await api.delete(url)
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
            display="flex"
            bg={colors["Pale-Yellow"]}
            className={classes.card}
        >

            <PostHead 
                username={post.user?.username} 
                profile_pic={post.user?.profile_pic} 
                posted_date={post.posted_date}
                action={{
                    type: 'profile',
                    onClick: handleClick,
                }}
            />

            <Card.Section className={classes.titleSection}>
                <Text className={classes.title}>
                    {post.title}
                </Text>
            </Card.Section>

            <Card.Section className={classes.imageSection} display={post.image? "initial":"none"}>
                <AspectRatio ratio={post_or_gift=="post"? 1080/720:720/720}>
                    <Image 
                        src={post.image}
                        className={classes.image}
                    />
                </AspectRatio>
            </Card.Section>
            
            <Card.Section className={classes.descriptionSection}>
                <Text className={classes.description}>
                    {post.description}
                </Text>
            </Card.Section>

            
            {/* <Card.Section className={classes.tagsSection}>
                <PillGroup>
                <Pill className={classes.tag}>
                    #{post.tags}
                </Pill>
                </PillGroup>
            </Card.Section> */}

            {/* <Card.Section className={classes.replySection}> */}
            { post_or_gift=="post" &&   <ReplySection post={post} displayDelete={displayDelete} onDelete={deletePost}/>}
            {/* </Card.Section> */}

            { post_or_gift=="gift" &&   <Space h={10}/>}

        </Card>

        {postUserProfile && (
            <UserProfile 
                opened={profileOpened}
                onClose={closeProfile}
                user={postUserProfile}
            />
        )}
        </>
    )
    
}

export default Post;