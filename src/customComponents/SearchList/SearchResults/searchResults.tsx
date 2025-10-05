import type { FC } from 'react';
import React from 'react';

const SearchResults: FC = (props) => {

    React.useEffect(() => console.log("SearchResults rendered"));

    return (
        <div>
            Search Results
        </div>
    )
}

export default SearchResults;
