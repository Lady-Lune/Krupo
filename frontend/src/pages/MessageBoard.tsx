import api from "@/api"
import { Grid } from "@mantine/core"
import { useEffect, useState } from "react"
import { PostorGift } from "../../types/model_types"
import Post from "../components/Post"
import { response } from "./SampleResponse"


const MessageBoard = () => {
        const [posts, setPosts] = useState<PostorGift[]>(response);
        useEffect( () => {
            const getRespose = async () => {
                const response = await api.get('/api/posts')
                console.log(response.data)
                setPosts(response.data)
            }
            getRespose();
    },[])   


    return (
    <>
    <Grid  p="md" gutter="xl" columns={12} justify="center"> 
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