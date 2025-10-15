import React from 'react';

import SearchBar from '../../components/SearchBar';
import SearchResults from './SearchResults';

import useSearchList from '../../customHook/SearchList/useSearchList';

const SearchList: React.FC = () => {

    const { 
        isPending,
        searchValue,
        searchResults,
        handleSearch,
        handleClearValue
    } = useSearchList();

    console.log("searchResults: ",searchResults);

    return (
        <div className='font-alan flex justify-center items center h-screen w-auto bg-gray-200 p-16 drop-shadow-2xl'>
            <div className='w-xl bg-white rounded-2xl'>
                <SearchBar 
                    value={searchValue} 
                    handleSearch={handleSearch} 
                    handleClearValue={handleClearValue}
                />
                <SearchResults 
                    value={searchValue} 
                    isPending={isPending} 
                    results={searchResults}
                />
            </div>
        </div>
    )
} 

export default SearchList;
