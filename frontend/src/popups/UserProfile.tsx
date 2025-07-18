import { 
    Card,
    Image,
    Text,
    Anchor,
    Badge,
    Group,
    Tooltip,
    Modal,
    CheckIcon,
    Space,
    Button,
    ScrollArea
 } from "@mantine/core"
import { colors } from "../theme"
import styles from './styles/UserProfile.module.css'
import { Profile } from "../../types/model_types";
import EditProfile from "./EditProfile";
import { useDisclosure } from "@mantine/hooks";
import { useUser } from "@/components/UserInfoContext";
import UserHelperCards from "@/components/UserHelperCards";
import { useNavigate } from "react-router-dom";
import api from "@/api";
import Alert from "@/components/Alert";

interface UserProfileProps {
    opened: boolean;
    onClose: () => void;
    user: Profile;
}

const UserProfile = ({ opened, onClose, user }: UserProfileProps) => {

    const [editOpened, { open: openEdit, close: closeEdit }] = useDisclosure(false);
    const {currentUser, refreshUser} = useUser();
    const navigate = useNavigate();
    const [alertOpened, { open: openAlert, close: closeAlert }] = useDisclosure(false);

    const alertinfo = {
        title:"Confirm Delete",
        description:"This action cannot be undone"
    }

    const handleEngagement = async () => {
        try {
            const res = await api.post("/api/reachoutcount/update/")
        } catch(error) {
            console.error(error)
        } finally {
            refreshUser()
        }
    }

    const deleteAccount = async () => {
        try {
            const res = await api.delete(`/api/users/${currentUser?.id}`)
        } catch (error) {
            console.error(error)
        } finally {
            refreshUser()
            navigate('/login')
        }
        
    }
    

    return (
        <>
        <Modal opened={opened} onClose={onClose} title={user.username} scrollAreaComponent={ScrollArea.Autosize}>

        <Card >

            <Image 
                    src={user.profile_pic || "src\\assets\\Logo - Color - W (2).png"} 
                    className={styles.image}
                    alt={`${user.username}'s profile picture`}
                />

            <Space h={10}/>

            <Group className={styles.nameGroup}>
                    
                <Text>{user.first_name} {user.last_name}</Text>
                
                {user.mod_status && (
                    <Tooltip label="Mod" position="bottom">
                        <div>
                            <Badge circle>
                                <CheckIcon width={10}/>
                            </Badge>
                        </div>
                    </Tooltip>
                )}

            <Tooltip label="Gift Requests" position="bottom">
                <Badge bg={colors["Dark Skintone-d1"]} autoContrast circle>{user.giftreq_count || 0}</Badge>
                </Tooltip>
    
                <Tooltip label="Posts" position="bottom">
                    <Badge bg={colors["Moss Green"]} autoContrast circle>{user.post_count || 0}</Badge> 
                </Tooltip>
                
                <Tooltip label="Replies" position="bottom">
                    <Badge bg={colors["Moss Green-l1"]} autoContrast circle>{user.reply_count || 0}</Badge>
                </Tooltip>

                <Tooltip label="Reachouts" position="bottom">
                    <Badge bg={colors["Light Skintone"]} autoContrast circle>{user.reachout_count || 0}</Badge>
                </Tooltip>

            </Group>

            <Space h={20}/>
    
            <Group className={styles.locationGroup}>
                <Text className={styles.locationText}>{user.location}</Text> 
                {/* should the user location be the code or the text */}
                <Text className={styles.dateText}>{new Date(user.date_joined).toLocaleDateString()}</Text>
            </Group>


            {/* Facebook Link */}
            <Group>
                {/* Facebook Icon - Using Bootstrap Icons */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                </svg>
                <Anchor href={user.fb_account} target="_blank" onClick={handleEngagement}>Facebook Account</Anchor>
            </Group>

            {/* Instagram Link */}
            <Group className={styles.socialGroup}> {/*all this styling wasn't put by me*/}
                {/* Instagram Icon - Using Bootstrap Icons */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
                <Anchor href={user.ig_account} target="_blank" onClick={handleEngagement}>Instagram Account</Anchor>
            </Group>

            {/* Email Link */}
            <Group className={styles.socialGroup}> {/*all this styling wasn't put by me*/}
                {/* Email Icon - Using Bootstrap Icons */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                    <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                    <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
                </svg>
                <Anchor href={`mailto:${user.email}`} onClick={handleEngagement}>Email</Anchor>
            </Group>

            <Space h={20}/>

            { (currentUser?.id == user.id) && <UserHelperCards />}
                
            <Space h={10} />
            { (currentUser?.id == user.id) &&
                <Button variant='filled' fullWidth onClick={openEdit}>Edit Profile</Button>
            }

            <Space h={10} />
            { (currentUser?.id == user.id) &&
                <Button bg={"orange"} fullWidth onClick={() => navigate("/logout")}>Logout</Button>
            }

            <Space h={10} />
            { (currentUser?.id == user.id) &&
                <Button variant="filled" color="red" fullWidth onClick={openAlert}>Delete Account</Button>
            }
        </Card>
        </Modal>

        
        {    (currentUser?.id == user.id) &&
            <EditProfile
                    opened={editOpened}
                    onClose={closeEdit}
                    // user_id={currentUser.id.toString()}
                    initialData={{
                        firstName: currentUser.first_name,
                        lastName: currentUser.last_name,
                        email: currentUser.email,
                        fbAccount: currentUser.fb_account,
                        igAccount: currentUser.ig_account,
                    }}
                    onSuccess={() => {
                        closeEdit();
                        onClose();
                        window.location.reload();
                    }}
                />
        }
        <Alert 
            modal={{alertopened:alertOpened, closealert:closeAlert}}
            alertinfo={alertinfo}
            button={{show:true, onClick:deleteAccount}}
        />





        </>
    )
}

  export default UserProfile;