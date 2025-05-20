import { Card, FileInput, Textarea, TextInput, Space, Modal, Overlay} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { colors } from "@/theme"
import PostHead from "./PostHead"
import classes from './CreatePost.module.css'
// import { PostProps } from "../../types/types"

// username
// profile_pic
// posted_date
// image
// decription
// tags
interface CreatePostProps {
    opened:boolean;
    open: () => void;
    close: () => void;
}

const CreatePost = ({opened, open, close}:CreatePostProps) => {
    return(
        <>
        <Modal opened={opened} onClose={close} variant="" 
        classNames={
            {
                overlay:classes.overlay,
                body:classes.body,
                header:classes.header,

            }
        }>
        <Card
            display="flex"
            withBorder
            // w={{
            //     base:300,
            //     sm:350,
            // }}
            bg={colors["Pale-Yellow"]}
            
        >
            <PostHead username="User" profile_pic="" posted_date="XX-XX-XXXX" /> {/*posted_date} />*/} {/* User.username, User.profile_pic, Post.posted_date*/}

           
                <TextInput
                    placeholder="Title"
                    size="md"
                    classNames={
                        {
                            input:classes.input,
                            wrapper:classes.wrapper,
                        }
                    }
                >
                </TextInput>

                <FileInput
                    placeholder="Image"
                    classNames={
                        {
                            input:classes.input,
                            wrapper:classes.wrapper,
                        }
                    }
                    //"src\assets\Logo - Color - W (2).png"
                />

                <Textarea
                    placeholder="Description"
                    classNames={
                        {
                            input:classes.input,
                            wrapper:classes.wrapper,
                        }
                    }
                >
                </Textarea>
            

            
           
                <TextInput
                    placeholder="Tags"
                    classNames={
                        {
                            input:classes.input,
                            wrapper:classes.wrapper,
                        }
                    }
                    
                >
                </TextInput>
            
            <Space />
        </Card>
        </Modal>
        </>
    )
    
}

export default CreatePost;