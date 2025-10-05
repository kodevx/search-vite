import React from 'react';

import SearchBar from '../../components/SearchBar';
import SearchResults from './SearchResults';

import useSearchList from '../../customHook/SearchList/useSearchList';

const SearchList: React.FC = () => {

    const { 
        searchValue,
        handleSearch,
        handleClearValue
    } = useSearchList();

    return (
        <div className='font-alan flex justify-center items center h-screen w-auto border-2 border-green-400'>
            <div className='flex justify-center items-center border-2 border-yellow-400'>
                <SearchBar 
                    value={searchValue} 
                    handleChange={handleSearch} 
                    handleClearValue={handleClearValue}
                />
                <SearchResults />
            </div>
        </div>
    )
} 

export default SearchList;
