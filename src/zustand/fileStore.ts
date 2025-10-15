import { create } from "zustand";
export interface FileType {
    id: number
    name: string
    extension: string
    iconLink: string
    location: string
    actionStatus?: string 
}

interface FileStateType {
    files: FileType[],
    addFile: (file: FileType) => void,
    removeFile: (name: string) => void
}

const fileStore = create<FileStateType>()((set, get) => ({
    files: [
        { id: 1, iconLink: '../../public/Icons/image.png', name: 'Random Text File', extension: '.txt', location: 'Personal Docs', actionStatus: 'Edited 2h ago' },
        { id: 2, iconLink: '../../public/Icons/image.png', name: 'Creative Photo', extension: '.png', location: 'Assests/Photos', actionStatus: 'Modified 3min ago'},
        { id: 3, iconLink: '../../public/Icons/image.png', name: 'Art Poster', location: 'Photoshop/Images', extension: '.jpeg' }
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
