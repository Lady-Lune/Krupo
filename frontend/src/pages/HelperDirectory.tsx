import api from "@/api"
import { Grid , Card } from "@mantine/core"
import { useEffect, useState } from "react"
import { HelperCardType, PostorGift } from "../../types/model_types"
import HelperCard from "@/components/HelperCard"
import classes from './styles/HelperDirectory.module.css'



interface HelperDirectoryProps {
    refreshKey?: number;
}

const HelperDirectory = ({ refreshKey }: HelperDirectoryProps) => {
        const [helpers, setHelpers] = useState<HelperCardType[] | null>(null);
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

        const onRecommend = () => {
            fetchPosts()
        }


    return (
    <>
    <Grid columns={12} className={classes.grid} align="center"> {/*bg={colors["Teal-l1"]}*/}
        {
        helpers?.map(
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
                        data={helper}
                        onDelete={afterDelete}
                        onRecommend={onRecommend}
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