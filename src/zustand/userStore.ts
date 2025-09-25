import { create } from "zustand";

interface UserType {
    id: number
    name: string
    activeStatus: string | number
}

interface StateType {
    users: UserType[],
    addUser: () => void,
    removeUser: () => void
}

const userStore = create((set) => ({
    users: [],
    addUsers: (newUser: UserType) => {
        set((state: StateType) => (
            [{ ...state.users, newUser }]
        ))
    },
    removeUsers: (id: number) => {
        set((state: StateType)  => {
            const refinedUsers = state.users.filter(user => user.id !== id);
            return [...refinedUsers];

        })
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
