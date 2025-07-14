import { colors } from "@/theme";
import { Avatar, Card, ActionIcon, Stack, Text, Group, Image } from "@mantine/core";
import classes from './styles/PostHead.module.css'

interface PostHeadProps {
    username : string;
    posted_date : string;
    profile_pic? : string;
    action: {
        type: 'submit' | 'profile';
        onClick?: (args?:any) => void;
       
    };
    
}

const PostHead = ({username, posted_date, profile_pic, action}: PostHeadProps) => {


    const profileIcon = <Image src="\src\assets\LogoIcon-ToTransparent.png" className={classes.profileIcon} />;
    const submitIcon  =    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                            </svg>


    return(
        <>
        <Card.Section>

            <Group className={classes.group} >
            
            <Avatar 
                color="grey"
                variant="outline"
                size={action?.type === "submit" ? "md" : 45}
                src={profile_pic}
            />  

            <Stack className={classes.userInfo}>
                <Text className={classes.username}>{username}</Text>
                <Text className={classes.date}>{posted_date}</Text>
            </Stack>

            <Group>

            <ActionIcon
                className={classes.actionButton}
                size={action?.type === "submit" ? "md" : 45}
                color={colors["Moss Green"]}
                onClick={action.onClick}
            >
                {action.type === "submit" ? submitIcon : profileIcon}
            </ActionIcon>

            {/* <ActionIcon
                className={classes.actionButton}
                size={45}
                color={colors["Orange"]}
                display={displayDelete}
                onClick={action.onDelete}
            >
                {deleteIcon}
            </ActionIcon> */}
            </Group>
            </Group>
        </Card.Section>
        </>
    )
}

export default PostHead;