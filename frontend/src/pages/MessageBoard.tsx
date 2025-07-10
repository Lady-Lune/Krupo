import api from "@/api"
import { Grid } from "@mantine/core"
import { useEffect, useState } from "react"
import { PostorGift } from "../../types/types"
import Post from "../components/Post"
import { colors } from "@/theme"
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
    <Grid  p="md" gutter="xl" columns={12} justify="center"> {/*bg={colors["Teal-l1"]}*/}
        {
        posts.map(
            (post, index) => {
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
                            posttype="ask"
                            // user_id={post.user.id}
                            buttonbehaviour="open profile" //change later
                            username={post.user?.username || "NONE"}
                            posted_date={post.posted_date}
                            posted_time={post.posted_time}
                            title={post.title}
                            description={post.description}
                            image={post.image}
                            tags={post.tags}
                            replies={post.replies}
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

        // <Button onClick={getPosts} > Get Post </Button>
        // <Post behaviour='open profile' username={post.user? post.user.username:"null" } {...post} />

        // <Grid bg={colors["Teal-l1"]} p="md"  gutter="xl" justify="center">
        //     <Grid.Col span={5.75}> {/*bd="1px solid red"*/}
        //         <Box bd="1px solid black" bg={colors["Light Skintone-l1"]}>
        //             <Space h={450} />
        //         </Box>
        //     </Grid.Col>
        //     <Grid.Col span={5.75}> {/*bd="1px solid red"*/}
        //         <Box bd="1px solid black" bg={colors["Light Skintone-l1"]}>
        //             <Space h={450} />
        //         </Box>
        //     </Grid.Col>
        //     <Grid.Col span={5.75}> {/*bd="1px solid red"*/}
        //         <Box bd="1px solid black" bg={colors["Light Skintone-l1"]}>
        //             <Space h={450} />
        //         </Box>
        //     </Grid.Col>
        //     <Grid.Col span={5.75}> {/*bd="1px solid red"*/}
        //         <Box bd="1px solid black" bg={colors["Light Skintone-l1"]}>
        //             <Space h={450} />
        //         </Box>
        //     </Grid.Col>
        // </Grid>