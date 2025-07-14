import HelperApplication from '../src/popups/HelperApplication';
export interface ThemeColors {
    [key:string]:string;
}

export interface User {
    id:number;
    username:string;
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
    user:User; //change to User maybe
    posted_date:string;
    posted_time:string 
    title:string;
    description:string;
    image:string | null;
    tags:string;
    replies?:Reply[]; //change to Reply[] maybe
}

export interface Reply {
    id:number;
    user:User;
    post:PostorGift;
    posted_date:string;
    posted_time:string;
    content:string;
}

export interface HelperCardType{
    id:number;
    user:User;
    serv_type:string;
    serv_desc:string;
    recommendations:number;
}

export interface EngagementMetric {
    user:User;
    reachout_count:number;
    recommendations:number;
    post_count:number;
    reply_count:number;
    giftreq_count:number;
}

export interface Profile {
    id:number;
    username:string;
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
    helper_role:HelperCardType[]
}

