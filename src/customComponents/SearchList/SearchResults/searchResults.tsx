import React from 'react';
import type { FC } from 'react';

import type { FileType } from '../../../zustand/fileStore';
import type { UserType } from '../../../zustand/userStore';

import ResultsCard from '../ResultCard';
import ListShimmer from '../../Shimmers/ListShimmer';

type SearchResultsType = FileType | UserType;
interface SearchResultsProps {
    value: string
    isPending: boolean
    results: SearchResultsType[]
}

const SearchResults: FC<SearchResultsProps> = (props) => {

    const { 
        value,
        results, 
        isPending
    } = props;

    if(isPending) {
        return (
            <ListShimmer />
        )
    }

    const resultsList = 
        results && results.map(data => (
            <ResultsCard data={data} />
        ))

    return (
        <div className='m-5 overflow-auto'>
            {resultsList && 
             resultsList.length ? (
                resultsList
             ) : (
                <div className='h-full flex justify-center pt-7'>
                    <h5 className='self-center text-gray-400'>
                        Enter text to search for files, users, etc ...
                    </h5>
                </div>
             )}
        </div>
    )
}

export default SearchResults;
