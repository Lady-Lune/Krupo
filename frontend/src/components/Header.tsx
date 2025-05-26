import { Avatar, Container, Image } from "@mantine/core";
import { User } from "../../types/types";
import MainTabs from "./MainTabs";

interface HeaderProps{
    user?:User
}

const Header = (props:HeaderProps) => {
    return(
        <>
        <Container 
        style={{ 
            height:150,
            alignContent:"space-around"
            }}>
            <Image 
            src="src\assets\ComboLogo_-_Color_-_B-removebg-preview.svg"
            fit="scale-down"
            height={100}
            />
            <Avatar 
            radius="xl"
            pos="absolute"
            right={30}
            top={20}
            src={props.user? props.user.profile_pic:null} />
        </Container>
        <MainTabs />
        </>
    )
};
export default Header;