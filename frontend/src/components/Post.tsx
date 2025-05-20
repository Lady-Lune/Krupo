import { Avatar, Card, Image, Text, AspectRatio, Pill, PillGroup } from "@mantine/core"
import { colors } from "@/theme"
import PostHead from "./PostHead"
import { PostProps } from "../../types/types"

// username
// profile_pic
// posted_date
// image
// decription
// tags




const Post = ({username, posted_date, posted_time, title, description, image, tags, replies}:PostProps) => {
    return(
        <>
        <Card
            display="flex"
            withBorder
            w={{
                base:300,
                sm:350,
            }}
            bg={colors["Pale-Yellow"]}
        >

            <PostHead username={username} profile_pic="" posted_date={"Placeholder"} /> {/*posted_date} />*/} {/* User.username, User.profile_pic, Post.posted_date*/}

            <Card.Section p="5 15">
                <Text
                    ff="Average"
                    size="md"
                    ta="center"
                    lh={1.25}
                >
                    {title}
                </Text>
            </Card.Section>

            <Card.Section p="10 15">
                <AspectRatio ratio={1080/720}>
                    <Image 
                        src={image} //TODO:change later
                        bd={0}
                        //"src\assets\Logo - Color - W (2).png"
                    />
                </AspectRatio>
            </Card.Section>
            
            <Card.Section p="5 15">
                <Text
                    ff="Average Sans"
                    fz={13}
                    lh={1.25}
                >
                    {description}
                </Text>
            </Card.Section>

            
            <Card.Section p="5 15">
                <PillGroup> {/*function - each pill linked to a search query - (array of tags) => {pills with links}*/}
                <Pill
                    ff="Averia Gruesa Libre"
                    fz={13}
                >
                    #{tags}
                </Pill>
                </PillGroup>
            </Card.Section>
        </Card>
        </>
    )
    
}

export default Post;