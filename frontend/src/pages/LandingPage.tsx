import Header from "@/components/Header";
import classes from './styles/LandingPage.module.css'
import { useUser } from "@/components/UserInfoContext";


export default function LandingPage(){

    const { currentUser, isLoading } = useUser(); // Access context data here

    if (isLoading) {
        return <div className={classes.loading}>Loading...</div>;
    }
    
    return <>
    <Header />
    </>
}