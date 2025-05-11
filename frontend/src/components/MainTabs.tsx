import { colors } from '@/theme'
import {Tabs, TabsPanel, Text} from '@mantine/core'
import Post from './Post'
import HelperCard from './HelperCard'

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
            children={<Post />} //change to whole page   
        >
        </TabsPanel>
        
        <TabsPanel 
            value='community'
            children={<Post />} //change to message board   
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