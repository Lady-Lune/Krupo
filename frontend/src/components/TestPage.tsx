import { ACCESS_TOKEN } from "@/constants";
import { useState , useEffect } from "react";
import { jwtDecode } from "jwt-decode";


const Test = () => {

    return(
        <>
        {/* {text} */}
        </>
    )
}

export default Test;

// const[text, setText] = useState<any>("No User")

//  useEffect(() => {
//     const getUser = async () => {
//     const token = localStorage.getItem(ACCESS_TOKEN);
//     if (!token) {
//         setText("No Token")
//     }
//     else {
//         const decoded = jwtDecode<{ user_id:number }>(token);
//         // console.log(decoded)
//         const user = decoded.user_id
//         setText(user)
//     }
// }
// getUser();
//  }, [])