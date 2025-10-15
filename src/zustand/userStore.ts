import { create } from "zustand";

export interface UserType {
    id: number
    name: string
    iconLink: string
    activeStatus: string | number
}

interface UserStateType {
    users: UserType[],
    addUsers: (newUser: UserType) => void,
    removeUsers: (id: number) => void
}

const userStore = create<UserStateType>()((set, get) => ({
    users: [
        { id: 1, iconLink: '../../public/Icons/person.png', name: 'Tanny', activeStatus: 'Active 1w ago' },
        { id: 2, iconLink: '../../public/Icons/person.png', name: 'Freddy', activeStatus: 'Active 30m ago' },
        { id: 3, iconLink: '../../public/Icons/person.png', name: 'Femy', activeStatus: 'Active 2hr ago' }
    ],
    addUsers: (newUser) => {
        set((state) => ({ 
            users: [...state.users, newUser] 
        }));
    },
    removeUsers: (id) => {
        const users = get().users;
        const refinedUsers = users.filter((user: UserType) => user.id !== id);
        set(() => ({
             users: [...refinedUsers] 
        }))
    }
}));

const useUsers = () => {
    const { users, addUsers, removeUsers } = userStore();

    return {
        users, 
        addUsers, 
        removeUsers
    }
}

export default useUsers;
