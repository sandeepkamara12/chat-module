import React, { useState } from 'react';

const ChatModule = ({ roomData, handleSendMessage, allMessages, currentUser, deleteMessage, setReplyMessage, replyMessage }) => {
    const [message, setMessage] = useState("");
    const handleChange = (e) => {
        setMessage(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (message) {
            handleSendMessage(message);
        }
        setMessage("");
    }

    return (
        <div className="relative max-w-full w-3/5 h-[calc(100vh-80px)]">
            {
                roomData?.room ? (
                    <>
                        <div className='flex items-center justify-between bg-white border-b border-gray-200 px-4 py-3 sm:px-6 lg:px-8'>
                            <div className="icon w-16">
                                <button type="button" className="flex justify-center items-center size-11 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 shrink-0">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                    </svg>
                                </button>
                            </div>
                            <div className="user-meta-action flex items-center justify-between gap-x-3 w-[calc(100%-64px)]">
                                <div className="user-meta flex items-center gap-x-3">
                                    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                                        <img className="user-avatar w-full h-full" src="https://images.unsplash.com/photo-1677644334825-0eb411012ac0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="User Avatar" />
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <div className="user-name">{roomData?.receiver?.fullname}</div>
                                        <div className="user-position">{roomData?.receiver?.email}</div>
                                    </div>
                                </div>
                                <div className="action flex items-center gap-x-2">
                                    <button type="button" className="flex justify-center items-center size-11 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 shrink-0">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                        </svg>
                                    </button>
                                    <button type="button" className="flex justify-center items-center size-11 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 shrink-0">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-auto h-[calc(100%-80px)]">
                            <div className="max-w-2xl w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                                <ul className="mt-16 space-y-5">
                                    {allMessages?.length > 0 ? allMessages?.map((message, index) => (
                                        <li className={`flex gap-x-2 sm:gap-x-4`} key={index}>
                                            {console.log(message, 'this is a message')}
                                            {
                                                message?.sender?._id !== currentUser?._id &&
                                                <svg className="shrink-0 size-9.5 rounded-full" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="38" height="38" rx="6" fill="#2563EB"></rect>
                                                    <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" strokeWidth="1.5"></path>
                                                    <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" strokeWidth="1.5"></path>
                                                    <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white"></ellipse>
                                                </svg>
                                            }
                                            <div className={`${message?.sender?._id !== currentUser?._id ? 'max-w-[90%] md:max-w-2xl w-full' : 'text-end'} grow space-y-3`}>
                                                <div className={`${message?.sender?._id === currentUser?._id ? 'inline-block bg-blue-600 rounded-lg p-4 shadow-2xs' : 'inline-block bg-white border border-gray-200 rounded-lg p-4 space-y-3'} text-start`}>
                                                    {

                                                        message?.replyMessage ?
                                                            <>
                                                                <p>{replyMessage?.sender?.fullname}</p>
                                                                <p>{replyMessage?.message}</p>
                                                            </>
                                                            : null
                                                    }
                                                    <p className={`${message?.sender?._id === currentUser?._id ? 'text-white' : 'text-gray-800'} text-sm`}>
                                                        {message?.message}
                                                    </p>
                                                    <div className='flex items-center gap-2'>
                                                        <svg onClick={() => { setReplyMessage(message) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 shrink-0 text-white cursor-pointer">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                                                        </svg>
                                                        <svg onClick={() => deleteMessage(message?._id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 shrink-0 text-white cursor-pointer">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            {
                                                message?.sender?._id === currentUser?._id &&
                                                <svg className="shrink-0 size-9.5 rounded-full" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="38" height="38" rx="6" fill="#2563EB"></rect>
                                                    <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" strokeWidth="1.5"></path>
                                                    <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" strokeWidth="1.5"></path>
                                                    <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white"></ellipse>
                                                </svg>
                                            }
                                        </li>
                                    ))
                                        : <div className="text-center text-gray-500">No messages yet</div>
                                    }
                                </ul>
                            </div>

                            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto sticky bottom-0 z-10 bg-white border-t border-gray-200 pt-2 pb-4 sm:pt-4 sm:pb-6 px-4 sm:px-6 lg:px-0 dark:bg-neutral-900 dark:border-neutral-700">
                                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-0">
                                    {
                                        // message &&
                                    <div className="absolute inline-block bg-gray-400 rounded-r-lg p-4 shadow-2xs text-start text-white text-sm -top-[90px] border-l-4 border-blue-400">
                                        {console.log(replyMessage, 'replyMessage')}
                                        <p>{replyMessage?.sender?.fullname}</p>
                                        <p>{replyMessage?.message}</p>
                                    </div>
                                    }
                                    <div className="relative">
                                        <textarea value={message} onChange={(e) => handleChange(e)} className="p-3 sm:p-4 pb-12 sm:pb-12 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Ask me anything..."></textarea>

                                        <div className="absolute bottom-px inset-x-px p-2 rounded-b-lg bg-white dark:bg-neutral-900">
                                            <div className="flex flex-wrap justify-between items-center gap-2">
                                                <div className="flex items-center">
                                                    <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-500 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                                                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                                            <line x1="9" x2="15" y1="15" y2="9"></line>
                                                        </svg>
                                                    </button>

                                                    <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-500 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                                                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                                                        </svg>
                                                    </button>
                                                </div>

                                                <div className="flex items-center gap-x-1">
                                                    <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-500 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                                                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                                                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                                            <line x1="12" x2="12" y1="19" y2="22"></line>
                                                        </svg>
                                                    </button>

                                                    <button type="submit" className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-hidden focus:bg-blue-500">
                                                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-gray-500">Select a chat to start messaging</p>
                    </div>
                )
            }
        </div>
    )
}

export default ChatModule
