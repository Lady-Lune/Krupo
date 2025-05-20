import { colors } from "@/theme";
import { Avatar, Card, ActionIcon, Stack, Text, Group, Image } from "@mantine/core";


// User.username
// User.profile_pic
// Post.posted_date
interface PostHeadProps{
    username : string;
    posted_date : string;
    profile_pic? : string;

}

const PostHead = ({username, posted_date, profile_pic}:PostHeadProps) => {
    return(
        <>
        <Card.Section>
            <Group
            w={{
                base:305,
                sm:455
            }}
            p={12.5}
            >
            
            <Avatar 
                radius="xl"
                size={50}
                src={profile_pic? profile_pic:null} //not needed when we have default profile

            />  
            <Stack p={5}>
                <Text lh={1} size="md" p={0}>{username}</Text>
                <Text lh={0} size="xs" p="0 0 5 0">{posted_date}</Text>
            </Stack>
            <ActionIcon
                radius={25}
                size={45}
                pos="absolute"
                right={10}
                color={colors["Moss Green"]}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                </svg>
                {/* <Image src="\src\assets\LogoIcon-ToTransparent.png" fit="cover" height={50} pos="absolute" bottom={0.5}/> */}
            </ActionIcon>
            </Group>
        </Card.Section>
        </>
    )
}

export default PostHead