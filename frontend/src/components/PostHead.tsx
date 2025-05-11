import { Avatar, Card, ActionIcon, Stack, Text, Group } from "@mantine/core";

// User.username
// User.profile_pic
// Post.posted_date

export default function PostHead(){
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
            />  
            <Stack p={5}>
                <Text lh={1} size="md" p={0}>User Name</Text>
                <Text lh={0} size="xs" p="0 0 5 0">XX-XX-XXXX</Text>
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