import { useState, useCallback, useEffect } from 'react';

import useUsers from '../../zustand/userStore';
import useFiles from '../../zustand/fileStore';

import type { FileType } from '../../zustand/fileStore';
import type { UserType } from '../../zustand/userStore';

type SearchResultsType = FileType | UserType;

const EMPTY_VALUE = 'empty_string';

export enum FilterType {
    ALL = 'All',
    FILES = 'Files',
    PEOPLE = 'People'
}
export interface TabsData {
    id: number
    count: number
    name: FilterType
}

const useSearchList = () => {

    const [filterType, setFilterType] = useState<FilterType>(FilterType.ALL);
    const [searchValue, setSearchValue] = useState<string>('');
    const [tabsData, setTabsData] = useState<TabsData[]>([]);
    const [searchResults, setSearchResults] = useState<SearchResultsType[]>([]);

    const [isPending, setIsPending] = useState<boolean>(false);

    const { users } = useUsers();
    const { files } = useFiles();

    console.log("Users :",users);

    useEffect(() => console.log("searchValue: ",searchValue));

    const handleResults = useCallback(
        (value: string, filterType: FilterType) => {
            try {
                if(value === '') {
                    throw EMPTY_VALUE;
                }

                console.log('handleResults INVOKED: ',value);

                setFilterType(filterType);

                if(filterType === FilterType.PEOPLE) {
                    const usersResults = users.filter(user => user.name.toLowerCase().includes(value.toLowerCase()));
                    setSearchResults([...usersResults]);
                } else if (filterType === FilterType.FILES) {
                    const fileResults = files.filter(file => file.name.toLowerCase().includes(value.toLowerCase()));
                    setSearchResults([...fileResults]);                    
                } else {
                    const fileResults = files.filter(file => file.name.toLowerCase().includes(value.toLowerCase()));
                    const usersResults = users.filter(user => user.name.toLowerCase().includes(value.toLowerCase()));
                    setSearchResults([...fileResults, ...usersResults]);

                    setTabsData([
                        { id: 1, name: FilterType.ALL, count: fileResults.length + usersResults.length },
                        { id: 2, name: FilterType.FILES, count: fileResults.length },
                        { id: 3, name: FilterType.PEOPLE, count: usersResults.length }
                    ])
                }

            } catch(error) {
                if(EMPTY_VALUE) {
                    setFilterType(FilterType.ALL);
                    setSearchResults([]);
                } else {
                    console.log("Error in search results logic: ",error);
                }
            }
        }, 
        [setSearchResults, setTabsData, files, users]
    );

    const handleSearch = useCallback(
        async (value: string) => {
            try {
                setIsPending(true);
                setSearchValue(value);
                handleResults(value, FilterType.ALL);
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
        setTabsData([]);
        setSearchResults([]);
    }, [setSearchValue, setTabsData, setSearchResults]);

    return {
        tabsData,
        filterType,
        searchValue,
        searchResults,
        isPending,
        handleSearch,
        handleResults,
        handleClearValue
    }
}

export default useSearchList;
