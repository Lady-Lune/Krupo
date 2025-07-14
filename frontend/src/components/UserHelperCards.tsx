import { useEffect, useState } from "react";
import { HelperCardType } from "../../types/model_types";
import { useUser } from "./UserInfoContext";
import api from "@/api";
import { Stack } from "@mantine/core";
import HelperCard from "./HelperCard";

const UserHelperCards = () => {

    const [helperCards, setHelperCards] = useState<HelperCardType[]>([]);
    const {currentUser} = useUser();
    
    useEffect( () => {
           if (currentUser) {
               fetchHelperCards(); 
           }
    },[currentUser, helperCards])   

    const fetchHelperCards = async () => {
        try{
            const res = await api.get('/api/helpercards/')
            // console.log(res.data)
            setHelperCards(res.data)
        } catch(error) {
            console.error('Error fetching helper cards:', error)
        }
    }

    return (
        <Stack>
            {helperCards?.map((card, index) => (
                <HelperCard data={card} onDelete={fetchHelperCards}/>
            )
            )
        }

        </Stack>
    );
}

export default UserHelperCards;