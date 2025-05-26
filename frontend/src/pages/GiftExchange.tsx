import api from "@/api"
import { Grid } from "@mantine/core"
import { useEffect, useState } from "react"
import { PostorGift } from "../../types/types"
import Post from "../components/Post"
import CreateButton from "../components/CreateButton"
import { colors } from "@/theme"
import { response } from "./SampleResponse"




const GiftExchange = () => {
        const [gifts, setGifts] = useState<PostorGift[]>(response);
        // const getPosts = async
        useEffect( () => {
            const getRespose = async () => {
                const response = await api.get('/api/gifts')
                console.log(response.data)
                setGifts(response.data)
            }
            getRespose();
    },[])   



    return (
    <>
    <Grid bg={colors["Teal-l1"]} p="md" gutter="xl" columns={12} justify="center">
        {
        gifts.map(
            (post) => {
                return (
                <Grid.Col 
                    span={{
                        base:12,
                        xs:10,
                        sm:8,
                        md:6,
                        lg:4,
                        xl:3,
                    }}   
                >
                    <Post buttonbehaviour='open profile' posttype="gift" username={post.user? post.user.username:"null"} {...post} />
                </Grid.Col>
                    )
            }
        )
    }
    </Grid>
    </>
    
    )
}

export default GiftExchange;