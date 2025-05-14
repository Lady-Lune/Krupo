import { Avatar, Card, ActionIcon, Stack, Text, Group } from "@mantine/core";

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
                size={50}
                pos="absolute"
                right={10}
                
            />
            
            </Group>
        </Card.Section>
        </>
    )
}

export default PostHead