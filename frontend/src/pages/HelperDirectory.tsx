import api from "@/api"
import { Grid , Card } from "@mantine/core"
import { useEffect, useState } from "react"
import { PostorGift } from "../../types/types"
import Post from "../components/Post"
import { colors } from "@/theme"
import { helpersresponse, response } from "./SampleResponse"
import HelperCard from "@/components/HelperCard"




const HelperDirectory = () => {
        const [helpers, setHelpers] = useState<any[]>(helpersresponse);
        // const getPosts = async
        useEffect( () => {
            const getRespose = async () => {
                const response = await api.get('/api/helpers')
                console.log(response.data)
                setHelpers(response.data)
            }
            getRespose();
    },[])   

    return (
    <>
    <Grid bg={colors["Teal-l1"]} p="md" gutter="xl" columns={12} justify="center">
        {
        helpers.map(
            (helper) => {
                return (
                <Grid.Col 
                    span={{
                        base:12,
                        xs:9,
                        sm:6,
                        md:5,
                        lg:4,
                        xl:3,
                    }}   
                >
                    <HelperCard username={helper.user.username} location={helper.user.location} {...helper}/>
                </Grid.Col>
                    )
            }
        )
    }
    </Grid>
    </>
    
    )
}

export default HelperDirectory;