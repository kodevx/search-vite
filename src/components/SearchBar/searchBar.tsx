import React, { useEffect } from 'react';
interface SearchBarProps {
    value: string
    handleSearch: (e: string) => void
    handleClearValue: () => void
}

const SearchBar: React.FC<SearchBarProps> = ({ value, handleSearch, handleClearValue }) => {

    return (
        <div className='m-5 w-auto flex justify-between'>
          <div className='flex flex-row items-center'>
            <img src={'../../public/Icons/searchIcon.png'} className={'h-8 w-8 mr-2'} alt={'search-icon'} />
            <input 
              type={'text'}
              value={value} 
              className={'text-2xl text-black outline-none'}
              placeholder={'Searching is easier'} 
              onChange={(e) => handleSearch(e.target.value)} 
            />
          </div>
          <button 
            className={'text-md underline cursor-pointer'} 
            onClick={handleClearValue}
          >
            Clear
          </button>
        </div>
    )
}

export default SearchBar;
