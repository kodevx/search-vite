import { useState } from 'react';

const useApp = () => {

    const [searchValue, setSearchValue] = useState<string>('');

    const handleChange = (value: string) => {
        setSearchValue(value);
    }

    const isOpenSearchResults = !!searchValue;

    return {
        searchValue,
        handleChange,
        isOpenSearchResults
    }
}

export default useApp;
