import React from 'react';
import { FilterType, type TabsData } from '../../customHook/SearchList/useSearchList';
import Tab from './Tab';
interface TabsProps {
    value: string
    filterType: FilterType
    tabsData: TabsData[],
    handleOnChange: () => void
}   

const Tabs: React.FC<TabsProps> = (props) => {

    const { 
        value,
        filterType,
        tabsData, 
        handleOnChange 
    } = props;

     const tabElements = 
        tabsData.map((tab) => (
            <Tab 
                value={value} 
                isActiveTab={!!(filterType === tab.name)}
                handleOnChange={handleOnChange} 
                {...tab} 
            />
        ));

    return (
        <div>
            {tabElements}
        </div>
    )
}

export default Tabs;

