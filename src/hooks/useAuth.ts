import {useContext} from 'react';
import Authorization from '../components/Auth';

export const useAuth = () =>{
    const auth = useContext(Authorization);
    // if(!user){
    //     throw new Error('please Login ')
    // }
        return auth;
};
