import { Avatar, Container, Image } from "@mantine/core";
import { Profile } from "../../types/model_types";
import MainTabs from "./MainTabs";
import classes from './styles/Header.module.css';
import UserProfile from "../popups/UserProfile";
import { useDisclosure } from "@mantine/hooks";

interface HeaderProps{
    user?:Profile
}

const Header = ({user: user}:HeaderProps) => {
    const [profileOpened, { open: openProfile, close: closeProfile }] = useDisclosure(false);

    const handleAvatarClick = () => {
        if (user) {
            openProfile();
            // console.log("Avatar Clicked")
            // console.log(user)
        }
    };

    return(
        <>
        <Container className={classes.header}>
            <Image 
                src="src\assets\ComboLogo_-_Color_-_B-removebg-preview.svg"
                fit="scale-down"
                className={classes.logo}
            />

            <Avatar 
                className={classes.avatar}
                src={user?.profile_pic} 
                alt={user?.first_name ? `${user.first_name}'s avatar` : 'User avatar'}
                onClick={handleAvatarClick}
                style={{ cursor: 'pointer' }}
            />
        </Container>

        <MainTabs />

        {user && (
                <UserProfile 
                    opened={profileOpened}
                    onClose={closeProfile}
                    user={user}
                />
            )}
        </>
    )
};
export default Header;