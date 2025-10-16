
const ListShimmer = (props) => {
    const { isLastChild } = props;

    const shimmerElements = [];

    for(let i = 0; i <= 5; i++) {
        shimmerElements.push(
            <div className={`flex flex-row items-center ${isLastChild ? 'border-b-0' : 'border-b-2'} pb-3 border-gray-200 animate-pulse mt-4`}>
                <div className='h-10 w-10 flex justify-center items-center bg-gray-200 rounded-lg'>
                    <div className='h-6 w-auto' />
                </div>
                <div className='ml-3 w-full'>
                    <div className='h-2 w-30 bg-gray-200 mb-2 rounded-sm' />
                    <div className='flex flex-row items-center'>
                        <div className='bg-gray-200 h-2 w-4 mr-2 rounded-sm'/>
                        <div className='bg-gray-200 h-2 w-9 rounded-sm'/>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='m-5'>
            {shimmerElements}
        </div>
    )
}

export default ListShimmer;
