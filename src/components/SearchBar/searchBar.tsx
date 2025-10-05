import React, { useEffect } from 'react';

interface SearchBarProps {
    value: string
    handleChange: (e: string) => void
    handleClearValue: () => void
}

const SearchBar: React.FC<SearchBarProps> = ({ value, handleChange, handleClearValue }) => {

  useEffect(() => console.log("SearchBar rendered"))

    return (
        <div className='border-2 border-blue-400'>
          <input 
            type={'text'}
            placeholder={'Searching is easier'} 
            value={value} 
            onChange={(e) => handleChange(e.target.value)} 
          />
          <button 
            className={'m-2 p-10 text-lg border-2 border-amber-700'} 
            onClick={handleClearValue}
          >
            Clear
          </button>
        </div>
    )
}

export default SearchBar;
