export const EachRequest = ({request}) => {
    return(
        <tr class="bg-white w-full">
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 overflow-ellipsis w-1">
        {/* {{user}} */}
        {request.user}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 overflow-ellipsis w-1">
        {/* {{status}} */} 
        {request.type}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div className="cursor-pointer">Details</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span class="relative z-0 inline-flex shadow-sm rounded-md">
            <button type="button" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-green-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
            <button type="button" class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-red-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
            </button>
        </span>
    </td>
</tr>
    )
}