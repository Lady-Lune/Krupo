import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Profile } from '../../types/model_types'
import api from '@/api';
import { USER } from '@/constants';

interface UserContextType {
    currentUser: Profile | undefined;
    setCurrentUser: (user: Profile | undefined) => void;
    isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<Profile | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    const getUserInfo = async (userId: string) => { //| number
    //   console.log(userId);
        try {
            const response = await api.get(`/api/profile/${userId}/`);
            // console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
            const user_id = localStorage.getItem(USER);
            if (user_id) {
                try {
                    const userData = await getUserInfo(user_id);
                    setCurrentUser(userData);
                } catch (error) {
                    console.log(error);
                }
            }
            setIsLoading(false);
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, isLoading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};