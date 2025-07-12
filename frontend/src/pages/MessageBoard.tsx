import api from "@/api"
import { Grid } from "@mantine/core"
import { useEffect, useState } from "react"
import { PostorGift } from "../../types/model_types"
import Post from "../components/Post"
import { response } from "./SampleResponse"


interface MessageBoardProps {
    refreshKey?: number;
}

const MessageBoard = ({ refreshKey }: MessageBoardProps) => {
        const [posts, setPosts] = useState<PostorGift[]>(response);
        
        const fetchPosts = async () => {
            const response = await api.get('/api/posts/')
            console.log(response.data)
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
    <Grid  p="md" gutter="xl" columns={12} justify="center" align="center" > 
        {
        posts.map(
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