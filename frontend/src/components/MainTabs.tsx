import { colors } from '@/theme'
import {Tabs, TabsPanel, Affix, Button} from '@mantine/core'
import Post from './Post'
import { useDisclosure } from '@mantine/hooks'
import HelperCard from './HelperCard'
// import MessageBoard from '@/pages/MessageBoard'
import CreatePost from './CreatePost'
import HelperApplication from './HelperApplication'
import UserProfile from './UserProfile'
import CreateButton from './CreateButton'

// remove later
const res = {
    "id": 1 ,
    "user": "Anon1",
    "posted_date": "2025-02-06",
    "posted_time": "21:48:54.398664",
    "title": "Post1",
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, enim. Impedit doloremque, quos aliquid libero laudantium similique aliquam beatae voluptatem, cum iusto atque nesciunt excepturi recusandae officiis. Eius, sit nihil.",
    "image": "src/assets/Logo - Color - W (2).png",
    "tags": "Post1",
    "replies": [
        "testingtesting1...",
        "istheuserinclud...",
        "istheuserinclud...",
        "test reply afte..."
    ]
}
// 
const res2 = {
    "id": 2,
    "user": "Anon2",
    "posted_date": "2025-02-06",
    "posted_time": "21:48:54.398664",
    "title": "Post2",
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, enim. Impedit doloremque, quos aliquid libero laudantium similique aliquam beatae voluptatem, cum iusto atque nesciunt excepturi recusandae officiis. Eius, sit nihil.",
    "image": "src/assets/Logo - Color - W (2).png",
    "tags": "Post2",
    "replies": [
        "testingtesting1...",
        "istheuserinclud...",
        "istheuserinclud...",
        "test reply afte..."
    ]
}

// const sample:PostorGift = {
//     "id": 8,
//     "user": {
//         "id": 6,
//         "username": "krop",
//         "profile_pic": "http://127.0.0.1:8000/pfp/defaultpfp.jpg",
//         "location": "COL0",
//         "email": "info.krupo@gmail.com",
//         "fb_account": "",
//         "ig_account": "",
//         "date_joined": "2025-02-02T19:18:09Z",
//         "first_name": "",
//         "last_name": "",
//         "mod_status": false
//     },
//     "posted_date": "2025-02-07",
//     "posted_time": "00:44:11.980557",
//     "title": "post_deepseek help",
//     "description": "post_deepseek help",
//     "image": null,
//     "tags": "post_deepseek help",
//     "replies": []
// }
//

export default function MainTabs(){
        // const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        // const button = e.currentTarget as HTMLButtonElement;
        // const name = button.name;
        // if (name=="gift") {return <CreatePost />}
        // else if (name=="post") {return <CreatePost />}
        // else if (name=="helper") {return <HelperApplication />}
        // }
    const [opened, {open, close}] = useDisclosure(true);
        
    return (
    <>
    <Tabs 
        defaultValue="community"
        variant='pills'
        radius="xs"
    >
        <Tabs.List 
            grow 
            justify="center"
            ff="Averia Gruesa Libre"
            >
            <Tabs.Tab 
                value="gift-xchng"
                color={colors["Dark Skintone-d1"]}
            >
                GIFT EXCHANGE
            </Tabs.Tab>
            <Tabs.Tab 
                value="community"
                color={colors["Moss Green"]}
            >
                COMMUNITY
            </Tabs.Tab>
            <Tabs.Tab 
                value="helpers"
                color={colors["Light Skintone"]}
            >
                HELPERS
            </Tabs.Tab>
        </Tabs.List>

        <TabsPanel 
            value='gift-xchng'
            // children={<UserProfile />}
            children={<CreatePost opened={opened} open={open} close={close} />}
            // children={<Post username={res.user} posted_date={res.posted_date} posted_time={res.posted_time} title={res.title} description={res.description} image={res.image} tags={res.tags} replies={res.replies} />} //change to whole page   
        >
        </TabsPanel>
        
        <TabsPanel 
            value='community'
            children={<Post username={res2.user} posted_date={res2.posted_date} posted_time={res2.posted_time} title={res2.title} description={res2.description} image={res2.image} tags={res2.tags} replies={res2.replies}/>} //change to message board   
            // children={<MessageBoard />}
        >
        </TabsPanel>
      
        <TabsPanel 
            value='helpers'
            children={<HelperApplication />} //change to directory     
        >
        </TabsPanel>
    </Tabs>
    <CreateButton />

    <Affix bottom={30} right={30}>
        <Button name="gift" p="md" size="xl" radius="xl" onClick={open}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-feather" viewBox="0 0 16 16">
                <path d="M15.807.531c-.174-.177-.41-.289-.64-.363a3.8 3.8 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1S3.147 6.824 2.557 8.523c-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88q.025.061.056.122A68 68 0 0 0 .08 15.198a.53.53 0 0 0 .157.72.504.504 0 0 0 .705-.16 68 68 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.53.53 0 0 0 0-.739l-.729-.744 1.311.209a.5.5 0 0 0 .443-.15l.663-.684c.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.5.5 0 0 0-.112-.172M3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.3 1.3 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a7 7 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a8 8 0 0 1 1.564-.173"/>
            </svg>
        </Button>
    </Affix>
    </>
    )
}