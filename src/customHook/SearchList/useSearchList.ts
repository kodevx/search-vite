import { useState, useCallback, useEffect, useTransition } from 'react';
import debounce from "../../util/debounce";

import useUsers from '../../zustand/userStore';
import useFiles from '../../zustand/fileStore';

import type { FileType } from '../../zustand/fileStore';
import type { UserType } from '../../zustand/userStore';

type SearchResultsType = FileType | UserType;

const useSearchList = () => {

    const [searchValue, setSearchValue] = useState<string>('');
    const [searchResults, setSearchResults] = useState<SearchResultsType[]>([]);
    const [isPending, startTransition] = useTransition();

    const { users } = useUsers();
    const { files } = useFiles();

    console.log("Users :",users);

    useEffect(() => console.log("searchValue: ",searchValue));

    const handleResults = useCallback(
        (value: string) => {
            try {
                const fileResults = files.filter(file => file.name.includes(value));
                const usersResults = users.filter(user => user.name.includes(value));

                setSearchResults([...fileResults, ...usersResults]);

            } catch(error) {
                console.log("Error in search results logic: ",error);
            }
        }, 
        []
    );

    const handleSearch = useCallback(
        (value: string) => {
            setSearchValue(value);
            startTransition(() => {
                debounce(handleResults, 3000);
            })
        },
        [setSearchValue, handleResults]
    );

    const handleClearValue = useCallback(() => {
        setSearchValue('');
    }, [setSearchValue]);

    return {
        searchValue,
        searchResults,
        isPending,
        handleSearch,
        handleClearValue
    }
}

export default useSearchList;
