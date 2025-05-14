import { colors } from '@/theme'
import {Tabs, TabsPanel, Text} from '@mantine/core'
import Post from './Post'
import HelperCard from './HelperCard'

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
//

export default function MainTabs(){
    return (
    <>
    <Tabs 
        defaultValue="community"
        variant='pills'
        radius="xs">
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
            
            children={<Post username={res.user} posted_date={res.posted_date} posted_time={res.posted_time} title={res.title} description={res.description} image={res.image} tags={res.tags} replies={res.replies} />} //change to whole page   
        >
        </TabsPanel>
        
        <TabsPanel 
            value='community'
            children={<Post username={res2.user} posted_date={res2.posted_date} posted_time={res2.posted_time} title={res2.title} description={res2.description} image={res2.image} tags={res2.tags} replies={res2.replies}/>} //change to message board   
        >
        </TabsPanel>
      
        <TabsPanel 
            value='helpers'
            children={<HelperCard />} //change to directory     
        >
        </TabsPanel>
    </Tabs>
    </>
    )
}