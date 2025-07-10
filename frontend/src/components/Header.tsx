import { Avatar, Container, Image } from "@mantine/core";
import { Profile } from "../../types/model_types";
import MainTabs from "./MainTabs";
import classes from './styles/Header.module.css';
import UserProfile from "../popups/UserProfile";
import { useDisclosure } from "@mantine/hooks";
import { useUser } from "./UserInfoContext";


const Header = () => {
    const [profileOpened, { open: openProfile, close: closeProfile }] = useDisclosure(false);
    const { currentUser, isLoading } = useUser(); // Access context data here

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const handleAvatarClick = () => {
        if (currentUser) {
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
                src={currentUser?.profile_pic} 
                alt={currentUser?.first_name ? `${currentUser.first_name}'s avatar` : 'User avatar'}
                onClick={handleAvatarClick}
                style={{ cursor: 'pointer' }}
            />
        </Container>

        <MainTabs />

        {currentUser && (
                <UserProfile 
                    opened={profileOpened}
                    onClose={closeProfile}
                    user={currentUser}
                />
            )}
        </>
    )
};
export default Header;