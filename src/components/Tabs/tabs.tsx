import React from 'react';
import { FilterType, type TabsData } from '../../customHook/SearchList/useSearchList';
import Tab from './Tab';
interface TabsProps {
    value: string
    currentTab: FilterType
    tabsData: TabsData[],
    handleOnChange: () => void
}   

const Tabs: React.FC<TabsProps> = (props) => {

    const { 
        value,
        currentTab,
        tabsData, 
        handleOnChange 
    } = props;

     const tabElements = 
        tabsData.map((tab) => (
            <Tab 
                value={value} 
                isActiveTab={!!(currentTab === tab.name)}
                handleOnChange={handleOnChange} 
                {...tab} 
            />
        ));

    return (
        <div className={`${value ? 'border-b-gray-200 border-b-2' : null} outline-0`}>
            <div className='ml-7 flex flex-row'>
                {tabElements}
            </div>
        </div>
    )
}

export default Tabs;

