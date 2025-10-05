import { create } from "zustand";
export interface FileType {
    id: number
    name: string
    extension: string
    actionStatus?: string 
}

interface FileStateType {
    files: FileType[],
    addFile: (file: FileType) => void,
    removeFile: (name: string) => void
}

const fileStore = create<FileStateType>()((set, get) => ({
    files: [
        { id: 1, name: 'Tanny', extension: 'Active 1w ago', actionStatus: 'Edited 2h ago' },
        { id: 2, name: 'Freddy', extension: 'Active 30m ago', actionStatus: 'Modified 3min ago'},
        { id: 3, name: 'Femy', extension: 'Active 2hr ago' }
    ],
    addFile: (newFile) => {
        set(
            (state) => ({
                files: [...state.files, newFile]
            })
        )
    },
    removeFile: (name: string) => {
        const refinedFiles = get().files.filter(file => file.name !== name);
        
        set(()  => {
            return ({
                files: [...refinedFiles]
            });
        })
    }
}));

const useFiles = () => {
    const { files, addFile, removeFile } = fileStore();

    return {
        files, 
        addFile, 
        removeFile
    }
}

export default useFiles;
