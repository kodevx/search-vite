import React from 'react';

import type { FileType } from '../../../zustand/fileStore';
import type { UserType } from '../../../zustand/userStore';

interface ResultCardProps {
     data: FileType | UserType
}

const LOCATION_KEY = 'location';
const ACTION_STATUS_KEY = 'actionStatus';
const ACTIVE_STATUS_KEY = 'activeStatus';

const ResultCard: React.FC<ResultCardProps> = props => {

    const { data } = props;

    return (
        <div className='flex flex-row items-center border-b-2 pb-3 border-gray-100'>
            <div className='h-10 w-10 flex justify-center items-center bg-gray-100 rounded-lg'>
                <img src={data.iconLink} className={'h-6 w-auto'} />
            </div>
            <div className='ml-3'>
                <div>{data.name}{'extension' in data ? data.extension : null}</div>
                <div className={'text-sm text-gray-400 flex flex-row items-center'}>
                    {LOCATION_KEY in data && (
                        <>
                            <div>{`in ${data.location}`}</div>
                            <div className={'h-1 w-1 rounded-full bg-gray-300 mx-1' } />
                            {ACTION_STATUS_KEY in data && <div>{data.actionStatus}</div>}
                        </>
                    )}
                    {ACTIVE_STATUS_KEY in data && <div>{data.activeStatus}</div>}
                </div>
            </div>
        </div>
    )
}

export default ResultCard;
