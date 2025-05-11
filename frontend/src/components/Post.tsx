import { Avatar, Card, Image, Text, AspectRatio, Pill, PillGroup } from "@mantine/core"
import { colors } from "@/theme"
import PostHead from "./PostHead"

// User.username
// User.profile_pic
// Post.posted_date
// Post.image
// Post.decription
// Post.tags
export default function Post(){
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

            <PostHead /> {/* User.username, User.profile_pic, Post.posted_date*/}
            <Card.Section p="10 15">
                <AspectRatio ratio={1080/720}>
                {/* src=post.img */}
                    <Image 
                        src="src\assets\Logo - Color - W (2).png" //TODO:change later
                    />
                </AspectRatio>
            </Card.Section>

            
            <Card.Section p="5 15">
                <Text
                    ff="Average Sans"
                    fz={13}
                    lh={1.25}
                    
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum
                </Text>
            </Card.Section>

            
            <Card.Section p="5 15">
                <PillGroup> {/*function - each pill linked to a search query - (array of tags) => {pills with links}*/}
                <Pill
                    ff="Averia Gruesa Libre"
                    fz={13}
                >
                    #Tag
                </Pill>
                </PillGroup>
            </Card.Section>
        </Card>
        </>
    )
}