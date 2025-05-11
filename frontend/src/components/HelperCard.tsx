import { colors } from '@/theme'
import { Button, Card , Group, Image , Space, Stack , Text} from '@mantine/core'

// User.username
// User.location
// HelperRole.serv_type
// HelperRole.serv_desc

export default function HelperCard() {
    return(
        <>
            <Card
                w={400}
                h={200}
                withBorder
                bd="3px solid hsl(185, 21%, 45%)"
                bg="#F9F9EF"
                radius={25}
            >
                <Group
                    dir='column'
                    w={100}
                    flex={2}
                >
                 <Image
                    src="src\assets\Logo - Color - W (2).png"
                    radius={5}
                    bd="1px solid hsl(185, 21%, 45%)"
                />
                 <Stack gap={0.5} pos="absolute" right={10}>
                    <Text size='md' w={265}>Username</Text>
                    <Text size='xs' w={265}>Location</Text>
                    <Text size='sm' w={265}>Job</Text>
                    <Text size='sm' w={265} lineClamp={4}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa quos iusto minima. Nam, assumenda itaque dignissimos veniam dolorem consequatur id! Nulla laboriosam nesciunt saepe cumque consectetur perspiciatis fugiat tempora.</Text>
                    <Space h={10}/>
                    <Button fullWidth radius={25} bg={colors["Moss Green"]} h={20} ff="Averia Gruesa Libre" fz={10} lts={1} p={3} fw={1}>RECOMMEND</Button>
                </Stack>
                </Group>
            </Card>
        </>
    )
};

{/* <Grid align='center'>
<Grid.Col
    span={3}
    // bd="solid hsla(187, 21.30%, 75.10%, 0.21) 1px"
    bg=""
>
<Image
    radius={25}
    src="src\assets\Logo - Color - W (2).png"
>
</Image>
</Grid.Col>

<Grid.Col
    span={9}
>
<Stack gap={0.5}>
    <Text size='sm' w={265}>Username</Text>
    <Text size='xs' w={265}>Location</Text>
    <Text size='sm' w={265}>Job</Text>
    <Text size='sm' w={265} h={50} lineClamp={1} truncate='end'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa quos iusto minima. Nam, assumenda itaque dignissimos veniam dolorem consequatur id! Nulla laboriosam nesciunt saepe cumque consectetur perspiciatis fugiat tempora.</Text>
    <Button size='xs' w={265} radius={25} bg={colors["Moss Green"]}>POST</Button>
</Stack>
</Grid.Col>
</Grid> */}