import Header from "@/components/Header";
import api from "@/api";
import { useState , useEffect } from "react";
import { Profile } from "../../types/model_types";
import { USER } from "@/constants";
import { useUser } from "@/components/UserInfoContext";
// export function fixImageURL(baseUrl:String, testUrl:String, folder:String) {
//     const escapedBase = baseUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//     const extensions = 'jpe?g|png|gif|bmp|svg|webp|tiff?';
//     const pattern = `^${escapedBase}(?:.*[/])?([^/?#]+\\.(?:${extensions}))`;
//     const regex = new RegExp(pattern, 'i');
//     const match = testUrl.match(regex);
//     if (match) {
//         console.log(match[1]); // Outputs: "cat.jpg"
//         const new_url = baseUrl + "/media/" + folder + "/" + match[1]
//         console.log(new_url)
//         return new_url
//     }
// }

// export const getUserInfo = async (userId: string) => { //| number
// //   console.log(userId);
//   try {
//     const response = await api.get(`/api/profile/${userId}/`);
//     // console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

export default function LandingPage(){
    // const [currentUser, setCurrentUser] = useState<Profile | undefined>(undefined);
    // useEffect(() => {
    // const fetchUser = async () => {
    //     const user_id = localStorage.getItem(USER);
    //     if (user_id) {
    //         try {
    //             const userData = await getUserInfo(user_id);
    //             setCurrentUser(userData);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // };

    // fetchUser();
    // }, []);

    const { currentUser, isLoading } = useUser(); // Access context data here

    if (isLoading) {
        return <div>Loading...</div>;
    }
    

    return <>
    <Header />
    </>
}