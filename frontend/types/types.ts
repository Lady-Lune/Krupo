export interface ThemeColors {
    [key:string]:string;
}

export interface User {
    id:number;
    username:string;
    password:string;
    profile_pic:string; //TODO:correct this
    location:string;
    email:string;
    fb_account:string;
    ig_account:string;
    date_joined:Date; //TODO:correct this
    first_name:string;
    last_name:string;
    mod_status:boolean

}

export interface PostorGift {
    id:number;
    user:User;
    posted_date:Date; //TODO:correct this
    posted_time:string //TODO: correct this
    title:string;
    description:string;
    image:string;
    tags:string;
    replies:string;
}
