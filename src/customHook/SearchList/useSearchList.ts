import { useState, useCallback, useEffect, useTransition } from 'react';
// import debounce from "../../util/debounce";

import useUsers from '../../zustand/userStore';
import useFiles from '../../zustand/fileStore';

import type { FileType } from '../../zustand/fileStore';
import type { UserType } from '../../zustand/userStore';

type SearchResultsType = FileType | UserType;

const EMPTY_VALUE = 'empty_string';

const useSearchList = () => {

    const [searchValue, setSearchValue] = useState<string>('');
    const [isPending, setIsPending] = useState<boolean>(false);
    const [searchResults, setSearchResults] = useState<SearchResultsType[]>([]);

    const { users } = useUsers();
    const { files } = useFiles();

    console.log("Users :",users);

    useEffect(() => console.log("searchValue: ",searchValue));

    const handleResults = useCallback(
        (value: string) => {
            try {
                if(value === '') {
                    throw EMPTY_VALUE;
                }
                console.log('handleResults INVOKED: ',value);
                const fileResults = files.filter(file => file.name.toLowerCase().includes(value.toLowerCase()));
                const usersResults = users.filter(user => user.name.toLowerCase().includes(value.toLowerCase()));

                setSearchResults([...fileResults, ...usersResults]);

            } catch(error) {
                if(EMPTY_VALUE) {
                    setSearchResults([]);
                } else {
                    console.log("Error in search results logic: ",error);
                }
            }
        }, 
        []
    );

    const handleSearch = useCallback(
        async (value: string) => {
            try {
                setIsPending(true);
                setSearchValue(value);
                handleResults(value);
            } catch(err) {
                console.log("handle Search func Error: ",err);
            } finally {
                setTimeout(() => setIsPending(false), 1000);
            }
        },
        [setSearchValue, handleResults, setIsPending]
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
