import { Card, FileInput, Textarea, TextInput, Modal, Affix, Button} from "@mantine/core"
import { useForm, hasLength } from "@mantine/form"
import { colors } from "@/theme"
import PostHead from "../components/PostHead"
import classes from './styles/CreatePost.module.css'
import api from "@/api"
import { useUser } from "@/components/UserInfoContext"


type CreatePostType = "community" | "gift-xchng" | "helpers" | string;

interface CreatePostProps {
  type: CreatePostType;
  onSuccess?: () => void;
}

interface FormValues {
    title: string;
    description: string;
    image: File | null;
    tags: string;
}

const CreatePost = ({type, onSuccess}:CreatePostProps) => {

    const { currentUser, isLoading } = useUser(); // Access context data here

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const form = useForm<FormValues>({
        initialValues: {
            title: '',
            description: '',
            image: null,
            tags: ''
        },
        validate: {
            title: hasLength({ min: 2, max: 75 }, 'Title must be between 2-75'),
            description: hasLength({ min: 2, max: 500 }, 'Description must be between 2-75'),
        }
    });

    const handleSubmit = async () => {
        const values = form.getValues();
        const formData = new FormData();
        
        formData.append('title', values.title);
        formData.append('description', values.description);
        
        if (values.image instanceof File) {
            formData.append('image', values.image);
        }

        try {
            const res = await api.post(type=="community"?"/api/posts/":"/api/gifts/", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            form.reset();
            onSuccess?.();
            // console.log( type , res.data);
        } catch (error) {
            console.log(error);
        }
    };
    return(
        <>
        <Card
            className={classes.card}
            component="form"
            onSubmit={form.onSubmit(handleSubmit)}
            
        >
            <PostHead 
                username={currentUser?.username || "None"} 
                profile_pic={currentUser?.profile_pic || ""} 
                posted_date={new Date().toISOString().split('T')[0]} 
                action={{
                    type:"submit", 
                    onClick:handleSubmit}}
            /> 
            {/* posted_date} /> */} {/* User.username, User.profile_pic, Post.posted_date */}
                <TextInput
                    placeholder="Title"
                    key={form.key('title')}
                    {...form.getInputProps('title')}
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
                    key={form.key('image')}
                    {...form.getInputProps('image')}
                    placeholder="Image"
                    classNames={
                        {
                            input:classes.input,
                            wrapper:classes.wrapper,
                        }
                    }                />

                <Textarea
                    key={form.key('description')}
                    {...form.getInputProps('description')}
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
                    key={form.key('tags')}
                    {...form.getInputProps('tags')}
                    placeholder="Tags"
                    classNames={
                        {
                            input:classes.input,
                            wrapper:classes.wrapper,
                        }
                    }
                >
                </TextInput>
        </Card>

        </>
    )
    
}

export default CreatePost;