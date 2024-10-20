import { USER_INFO, User } from '../types';

interface UserState {
    user: User | null;
}

interface UserAction {
    type: string;
    payload?: { user: User };
}

const initialState: UserState = {
    user: null,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case USER_INFO:
            return {
                ...state,
                user: action.payload?.user || null,
            };
        default:
            return state;
    }
};

export default userReducer;