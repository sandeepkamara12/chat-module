import React from 'react'

const ChatList = ({onlineUsers, setRoomData}) => {
    const currentUser = JSON.parse(sessionStorage.getItem('user'));
    const handleChatRoom = (user) => {
        setRoomData(prev=>({...prev,room:'teset', receiver:user}));
    }
    return (
        <div className="flex flex-wrap">
            <div className="w-full">
             
                <nav className="flex w-full flex-col" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                    {
                        onlineUsers?.filter(user=>user?.id!==currentUser?.id).map((user, index) => (
                            <div onClick={()=>handleChatRoom(user)} key={index} className="hover:bg-gray-100 border-b border-gray-100 cursor-pointer transition-all hs-tab-active:text-blue-600 py-4 px-5 flex text-sm text-gray-500 active" id="vertical-tab-with-border-item-1" aria-selected="true" data-hs-tab="#vertical-tab-with-border-1" aria-controls="vertical-tab-with-border-1" role="tab">
                                <div className='flex gap-x-2 justify-between w-full'>
                                    <div className='relative w-10 h-10 '>
                                        <img src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="icon" className="w-full h-full rounded-full" />
                                        <span className='absolute -bottom-1 -right-1 bg-emerald-500 rounded-full w-4 h-4 border-2 border-white'>
                                            <svg className="w-full h-full" width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 32C24.8365 32 32 24.8365 32 16C32 7.16346 24.8365 0 16 0C7.16346 0 0 7.16346 0 16C0 24.8365 7.16346 32 16 32Z" fill="#34AADF"></path>
                                                <path d="M6.65901 15.8612C6.65901 15.8612 14.659 12.578 17.4335 11.422C18.4972 10.9596 22.1041 9.47974 22.1041 9.47974C22.1041 9.47974 23.7688 8.83238 23.6301 10.4046C23.5838 11.052 23.2139 13.3179 22.844 15.7688C22.289 19.237 21.6879 23.0289 21.6879 23.0289C21.6879 23.0289 21.5954 24.0925 20.8093 24.2774C20.0232 24.4624 18.7283 23.6301 18.4972 23.4451C18.3121 23.3064 15.0289 21.2254 13.8266 20.2081C13.5029 19.9306 13.133 19.3757 13.8728 18.7283C15.5376 17.2023 17.526 15.3064 18.7283 14.1041C19.2833 13.5491 19.8381 12.2543 17.526 13.8266C14.2428 16.0925 11.0058 18.2196 11.0058 18.2196C11.0058 18.2196 10.2659 18.682 8.87866 18.2659C7.49133 17.8497 5.87283 17.2948 5.87283 17.2948C5.87283 17.2948 4.76307 16.6012 6.65901 15.8612Z" fill="white"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className='w-[calc(100%-60px)] flex flex-col gap-y-1'>
                                        <div className='flex items-center justify-between'>
                                            <span className='font-medium text-[13px] text-gray-800'>{user.fullname}</span>
                                            <span className='text-[10px] uppercase text-gray-400'>1M</span>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <span className='font-light truncate text-xs text-gray-500 leading-4'>{user?.email}</span>
                                            <span className='w-4 h-4 flex items-center justify-center bg-green-400 rounded-full text-white p-0.5'>
                                                <svg className="n2l26 z859i" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M20 6 9 17l-5-5"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className=''>
                                            <span className='text-xs text-gray-800 font-semibold'>Awesome!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </nav>
            </div>
        </div>
    )
}

export default ChatList
