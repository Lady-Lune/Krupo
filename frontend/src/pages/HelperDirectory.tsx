import api from "@/api"
import { Grid , Card } from "@mantine/core"
import { useEffect, useState } from "react"
import { HelperCardType, PostorGift } from "../../types/model_types"
import { helpersresponse, response } from "./SampleResponse"
import HelperCard from "@/components/HelperCard"




interface HelperDirectoryProps {
    refreshKey?: number;
}

const HelperDirectory = ({ refreshKey }: HelperDirectoryProps) => {
        const [helpers, setHelpers] = useState<HelperCardType[]>(helpersresponse);
        const fetchPosts = async () => {
            const response = await api.get('/api/helpers/')
            console.log(response.data)
            setHelpers(response.data)
        };
        // const getPosts = async
        useEffect( () => {
            fetchPosts();
            },[refreshKey])   

        const afterDelete = () => {
        fetchPosts(); // Refetch posts after deletion
        };



    return (
    <>
    <Grid p="md" gutter="xl" columns={12} justify="center"> {/*bg={colors["Teal-l1"]}*/}
        {
        helpers.map(
            (helper, index) => {
                return (
                <Grid.Col 
                    key={`${helper.id}-${index}`}                   
                    span={{
                        base:12,
                        xs:9,
                        sm:6,
                        md:5,
                        lg:4,
                        xl:3,
                    }}   
                >
                    <HelperCard 
                        user={helper.user}
                        helper_id={helper.id}
                        serv_type={helper.serv_type}
                        serv_desc={helper.serv_desc}
                        onDelete={afterDelete}
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

export default HelperDirectory;