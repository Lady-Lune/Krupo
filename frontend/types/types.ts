import HelperApplication from '../src/components/HelperApplication';
export interface ThemeColors {
    [key:string]:string;
}

export interface User {
    id:number;
    username:string;
    password:string;
    profile_pic:string;
    location:string;
    email:string;
    fb_account:string;
    ig_account:string;
    date_joined:string; 
    first_name:string;
    last_name:string;
    mod_status:boolean;

}

export interface PostorGift {
    id:number;
    user:User;
    posted_date:string;
    posted_time:string 
    title:string;
    description:string;
    image:string | null;
    tags:string;
    replies?:Reply[];
}

export interface PostProps {
    username: string;
    posted_date: string;
    posted_time: string;
    title: string;
    description: string;
    image?: string | null;
    tags: string;
    replies?: string[];
}

export interface Reply {
    id:number;
    user:User;
    post:PostorGift;
    posted_date:string;
    posted_time:string;
    content:string;
}

export interface HelperCard{
    id:number;
    user:User;
    serv_type:string;
    serv_desc:string;
}

export interface EngagementMetric {
    user:User;
    reachout_count:number;
    recommendations:number;
    post_count:number;
    reply_count:number;
    giftreq_count:number;
}

export interface UserProfile {
    id:number;
    username:string;
    password:string;
    profile_pic:string;
    location:string;
    email:string;
    fb_account:string;
    ig_account:string;
    date_joined:string; 
    first_name:string;
    last_name:string;
    mod_status:boolean;
    reachout_count:number;
    recommendations:number;
    post_count:number;
    reply_count:number;
    giftreq_count:number;
    helper_role:HelperCard[]
}
