import { create } from "zustand";

interface FileType {
    name: string
    extension: string
}

interface StateType {
    files: FileType[],
    addFile: () => void,
    removeFile: () => void
}

const fileStore = create((set) => ({
    files: [],
    addFile: (newFile: FileType) => {
        set((state: StateType) => (
            [{ ...state.files, newFile }]
        ))
    },
    removeFile: (name: string) => {
        set((state: StateType)  => {
            const refinedFiles = state.files.filter(file => file.name !== name);
            return [...refinedFiles];
        })
    }
}));

const useFiles = () => {
    const { files, addFiles, removeFiles } = fileStore();

    return {
        files, 
        addFiles, 
        removeFiles
    }
}

export default useFiles;
