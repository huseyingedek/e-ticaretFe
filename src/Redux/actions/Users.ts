import { User } from '../types';

export const UserInfo = (userData: { user: User }) => ({
    type: 'USER_INFO',
    payload: userData,
});