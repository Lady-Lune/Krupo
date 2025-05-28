import { colors } from "@/theme";
import { Avatar, Card, ActionIcon, Stack, Text, Group, Image } from "@mantine/core";
import { useFormContext , FormContext } from "./FormContext";

// User.username
// User.profile_pic
// Post.posted_date
interface PostHeadProps {
    username : string;
    posted_date : string;
    profile_pic? : string;
    buttonbehaviour: "send post" | "open profile";

}

const PostHead = ({username, posted_date, profile_pic, buttonbehaviour}:PostHeadProps) => {
    // const formContext = buttonbehaviour === "send post"? useFormContext(): null;
    // const {form , handleSubmit} = useFormContext();


    const handleClick = () => {
        if (buttonbehaviour==="send post"){
            console.log("post sent")

            // form.onSubmit((values) => {
                // console.log("Submitting form (PostHead-handleClick-form.onSubmit=>handleSubmit):", values);
                // handleSubmit(values);
            // })();
        } else if (buttonbehaviour==="open profile"){
            console.log("open profile")
        }
    }

    const openprofileicon = <Image src="\src\assets\LogoIcon-ToTransparent.png"  height={57.5}  pos="absolute" bottom={-5}/> //fit="scale-down" 
    const sendposticon  =    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
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
                size={buttonbehaviour==="send post"? "md":50}
                src={profile_pic? profile_pic:null} //not needed when we have default profile

            />  
            <Stack p={5} ta="center">
                <Text lh={0.5} size="md" >{username}</Text>
                <Text lh={0} size="xs" >{posted_date}</Text>
            </Stack>
            <ActionIcon
                radius="xl"
                size={buttonbehaviour=="send post"? "md":45}
                // pos="absolute"
                // right={20}
                color={colors["Moss Green"]}
                onClick={handleClick}
                children={buttonbehaviour=="send post"? sendposticon:openprofileicon}
            >
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                </svg> */}
                {/* <Image src="\src\assets\LogoIcon-ToTransparent.png" fit="cover" height={50} pos="absolute" bottom={0.5}/> */}
            </ActionIcon>
            </Group>
        </Card.Section>
        </>
    )
}

export default PostHead;