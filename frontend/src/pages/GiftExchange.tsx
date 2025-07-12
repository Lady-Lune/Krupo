import api from "@/api"
import { Grid } from "@mantine/core"
import { useEffect, useState } from "react"
import { PostorGift } from "../../types/model_types"
import Post from "../components/Post"
import { response } from "./SampleResponse"




interface GiftExchangeProps {
    refreshKey?: number;
}

const GiftExchange = ({ refreshKey }: GiftExchangeProps) => {
        const [gifts, setGifts] = useState<PostorGift[]>(response);
        
        const fetchGifts = async () => {
            const response = await api.get('/api/gifts')
            // console.log(response.data)
            setGifts(response.data)
        };
        
        useEffect( () => {
            fetchGifts(); 
    },[refreshKey])   

    const handleGiftDelete = () => {
        fetchGifts(); // Refetch gifts after deletion
    };   



    return (
    <>
    <Grid p="md" gutter="xl" columns={12} justify="center"> 
        {
        gifts.map(
            (post,index) => {
                return (
                    <Grid.Col 
                        key={`${post.id}-${index}`}
                        span={{
                            base:12,
                            xs:10,
                            sm:8,
                            md:6,
                            lg:4,
                            xl:3,
                        }}   
                    >
                        <Post 
                            post_or_gift="gift"
                            post={post}
                            onDelete={handleGiftDelete}
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

export default GiftExchange;