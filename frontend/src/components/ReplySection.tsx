import Replies from "./Replies";
import { Accordion, Text, TextInput, Button } from "@mantine/core";
import { PostorGift } from "../../types/model_types";
import { useForm } from "@mantine/form";
import api from "@/api";


interface RepliesProps {
    post: PostorGift;
}

interface FormValues {
    post:String
    content:String;

}
const ReplySection = ({ post }: RepliesProps) => {

    const reply_icon =  <svg   xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-reply" viewBox="0 0 16 16">
                            <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.7 8.7 0 0 0-1.921-.306 7 7 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254l-.042-.028a.147.147 0 0 1 0-.252l.042-.028zM7.8 10.386q.103 0 .223.006c.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96z"/>
                        </svg>
    
    const form = useForm<FormValues>({
            initialValues: {
                post:"",
                content:""
            }
        }
    );
    
    const handleClick = async () => {
        const values = form.getValues()
        values.post = post.id.toString()
        const data = {
            'post':values.post,
            'content':values.content
        }

        console.log(values)
        try {
            const res = await api.post("/api/replies/",values)
        } catch (error) {
            alert(error)
        } finally {
            // add a finally block
        };



    }

    const reply_buttton =   <Button 
                                size="xs"
                                p={0}
                                bg="none"
                                c="dark"
                                onClick={handleClick}
                            >
                                {reply_icon}
                            </Button>



    return (        
        <Accordion variant="seperated" chevronPosition="left">
            <Accordion.Item value="replies">
                <Accordion.Control p={0} >
                    {/* <Text fz={13}>Replies</Text> */}
                </Accordion.Control>
                <Accordion.Panel >
                    <Replies post={post} />
                    <TextInput 
                        placeholder="Reply"
                        size="xs"
                        leftSection={reply_buttton}
                        variant="filled"
                        p={3}
                        key={form.key('content')}
                        {...form.getInputProps('content')}
                    />
                </Accordion.Panel>
            </Accordion.Item>
        </Accordion>)
}

export default ReplySection;