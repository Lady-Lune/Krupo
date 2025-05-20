import api from "@/api"
import { PostorGift } from '../../types/types';
import Post from "@/components/Post";
import { useState } from "react";


const MessageBoard = () => {
    // const [data, setData] = useState<PostorGift>(sample);
    // async () => {
    // try {
    //     const res = await api.get("api/posts/9")
    //     const data:PostorGift = res.data
    //     console.log(res.data)
    //     setData(data)
    // } catch (error) {
    //     alert(error)
    // }
    // }
    const data:PostorGift = {
    "id": 8,
    "user": {
        "id": 6,
        "username": "krop",
        "profile_pic": "http://127.0.0.1:8000/pfp/defaultpfp.jpg",
        "location": "COL0",
        "email": "info.krupo@gmail.com",
        "fb_account": "",
        "ig_account": "",
        "date_joined": "2025-02-02T19:18:09Z",
        "first_name": "",
        "last_name": "",
        "mod_status": false
    },
    "posted_date": "2025-02-07",
    "posted_time": "00:44:11.980557",
    "title": "post_deepseek help",
    "description": "post_deepseek help",
    "image": null,
    "tags": "post_deepseek help",
    "replies": []
}

    return(
            <Post 
            username={data.user.username? data.user.username:"No User"} 
            posted_date={data.posted_date} 
            posted_time={data.posted_time} 
            title={data.title} 
            description={data.description} 
            image={data.image}
            tags={data.tags}
            replies={data.replies} 
            />
            )
}
export default MessageBoard;