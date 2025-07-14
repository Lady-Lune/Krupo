import { useNavigate } from "react-router-dom";
import { Paper, Title, Button, Space } from "@mantine/core";

const NotFound = () => {
    const navigate = useNavigate()

        return(
                <Paper bd="1px solid pink" c={'teal'} ta={'center'} h={'100vh'} p={"45vh 0 0 0"} >
                    <Title order={1}>The Page You Are Looking For</Title>
                    <Title order={1}>Is Not Here</Title>
                    <Space h={20} />
                    <Button w={"25%"} onClick={() => { navigate('/')}}>GO HOME</Button>
                </Paper>
        )
    }

export default NotFound;