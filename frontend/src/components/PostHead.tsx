import { colors } from "@/theme";
import { Avatar, Card, ActionIcon, Stack, Text, Group, Image } from "@mantine/core";

interface PostHeadProps {
    username : string;
    posted_date : string;
    profile_pic? : string;
    action: {
        type: 'submit' | 'profile';
        onClick?: (args?:any) => void;
        onDelete?: (args?:any) => void;
    };
    displayDelete: string //'none' | 'inline'
}

const PostHead = ({username, posted_date, profile_pic, action, displayDelete}: PostHeadProps) => {


    const profileIcon = <Image src="\src\assets\LogoIcon-ToTransparent.png"  height={57.5}  pos="absolute" bottom={-5}/> //fit="scale-down" 
    const submitIcon  =    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                            </svg>
    const deleteIcon =  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                        </svg>

    return(
        <>
        <Card.Section>

            <Group
            justify="space-evenly"
            p="10 5"
            >
            
            <Avatar 
                radius="xl"
                size={action?.type === "submit" ? "md" : 50}
                src={profile_pic} //not needed when we have default profile
            />  

            <Stack p={5} ta="center">
                <Text lh={0.5} size="md" >{username}</Text>
                <Text lh={0} size="xs" >{posted_date}</Text>
            </Stack>

            <Group>

            <ActionIcon
                radius="xl"
                size={action?.type === "submit" ? "md" : 45}
                color={colors["Moss Green"]}
                onClick={action.onClick}
            >
                {action.type === "submit" ? submitIcon : profileIcon}
            </ActionIcon>

            { <ActionIcon
                radius="xl"
                size={45}
                color={colors["Orange"]}
                display={displayDelete}
                onClick={action.onDelete}
            >
                {deleteIcon}
            </ActionIcon>}
            </Group>
            </Group>
        </Card.Section>
        </>
    )
}

export default PostHead;