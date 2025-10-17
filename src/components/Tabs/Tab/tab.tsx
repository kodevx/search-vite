import React from 'react';
import { FilterType } from '../../../customHook/SearchList/useSearchList';

interface TabProps {
    id: number
    name: string,
    count: number,
    value: string,
    isActiveTab: boolean,
    handleOnChange: (value: string, name: string) => void
}

const getIcon = (name) => {
    let iconPath: string | null;

    if(name === FilterType.FILES) {
        iconPath = 'Icons/paperPin.png';
    } else if(name === FilterType.PEOPLE) {
        iconPath = 'Icons/user.png'
    } else {
        iconPath = '';
    }

    return iconPath;
}

const Tab: React.FC<TabProps> = (props) => {

    const { 
        id,
        name,
        count,
        value,
        isActiveTab,
        handleOnChange
    } = props;

    return (
        <div key={id} className={`px-2 pb-1 ${isActiveTab ? 'border-b-black border-b-3' : ''}`}> 
            <button onClick={() => handleOnChange(value, name)} className='cursor-pointer'>
                <div className='flex flex-row items-center'>
                    {name !== FilterType.ALL ? ( 
                        <img src={getIcon(name)} className={'h-5 w-5'} alt={`${name}-icon`} />
                    ) : null}
                    <div className='flex flex-row items-center ml-2'>
                        <div className='text-md'>{name}</div>  
                        <div>
                            <div className='self-center bg-gray-100 text-gray-400 text-sm rounded-md ml-2 px-2 py-0 mt-0.5'>
                                {count}
                            </div>
                        </div>   
                    </div>     
                </div>
            </button>
        </div>
    )
}

export default Tab;
