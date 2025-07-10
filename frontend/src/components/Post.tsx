import { Avatar, Card, Image, Text, AspectRatio, Pill, PillGroup } from "@mantine/core"
import { colors } from "@/theme"
import PostHead from "./PostHead"
import { PostProps } from "../../types/model_types"

// username
// profile_pic
// posted_date
// image
// decription
// tags


const Post = ({username, posted_date, posted_time, title, description, image, tags, replies, buttonbehaviour, posttype}:PostProps) => {
    
    return(
        <>
        <Card
            display="flex"
            // w={{
            //     base:300,
            //     md:250,
            // }}
            bg={colors["Pale-Yellow"]}
        >

            <PostHead username={username} profile_pic="" posted_date={posted_date} buttonbehaviour={buttonbehaviour}/> {/*posted_date} />*/} {/* User.username, User.profile_pic, Post.posted_date*/}

            <Card.Section p="5 15">
                <Text
                    ff="Average"
                    size="md"
                    lh={1.25}
                >
                    {title}
                </Text>
            </Card.Section>

            <Card.Section p="10 15">
                <AspectRatio ratio={posttype=="ask"? 1080/720:720/720}>
                    <Image 
                        src={image} //TODO:change later ? fixImageURL(import.meta.env.BASE_URL, image,"post_images"):image
                        bd="1px solid black"
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