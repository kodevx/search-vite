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
        <div key={id}> 
            <button onClick={() => handleOnChange(value, name)}>
                <div>
                    {name !== FilterType.ALL ? ( 
                        <img src={getIcon(name)} alt={`${name}-icon`} />
                    ) : null}
                    {name}  
                    <span>{count}</span>        
                </div>
            </button>
        </div>
    )
}

export default Tab;
