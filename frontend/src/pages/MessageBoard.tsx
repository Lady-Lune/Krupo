import api from "@/api"
import { Grid } from "@mantine/core"
import { useEffect, useState } from "react"
import { PostorGift } from "../../types/model_types"
import Post from "../components/Post"
import classes from './styles/MessageBoard.module.css'


interface MessageBoardProps {
    refreshKey?: number;
}

const MessageBoard = ({ refreshKey }: MessageBoardProps) => {
        const [posts, setPosts] = useState<PostorGift[] | null>(null);
        
        const fetchPosts = async () => {
            const response = await api.get('/api/posts/')
            // console.log(response.data)
            setPosts(response.data)
        };
        
        useEffect( () => {
            fetchPosts();
    },[refreshKey])   


    const handlePostDelete = () => {
        fetchPosts(); // Refetch posts after deletion
    };

    return (
    <>
    <Grid className={classes.grid} align="center"> 
        {
        posts?.map(
            (post, index) => {
                const post_user = post.user;
                return (
                    <Grid.Col 
                        key={`${post.id}-${index}`}
                        span={{
                            base: 12,
                            xs: 10,
                            sm: 8,
                            md: 6,
                            lg: 4,
                            xl: 3,
                        }}
                    >
                        <Post 
                            post_or_gift="post"
                            post={post}
                            onDelete={handlePostDelete}
                        />
                    </Grid.Col>
                )
            }
        )
    }
    </Grid>
    </>
    
    )
}

export default MessageBoard;