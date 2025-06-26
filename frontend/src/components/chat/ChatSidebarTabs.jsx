const ChatSidebarTabs = ({onTabChange, activeTab}) => {
   
  return (
     <div className="border-b border-gray-200 dark:border-neutral-700">
                <nav className="flex gap-x-2 p-2" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                    <button onClick={()=>onTabChange('chat-list')} type="button" className={`cursor-pointer hover:bg-gray-100 font-medium text-gray-500 hover:text-gray-800 rounded-md py-2 px-2.5 inline-flex items-center gap-x-2 border-b-2 border-transparent text-xs whitespace-nowrap focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none ${activeTab === 'chat-list' ? 'bg-gray-100 text-gray-800' : ''}`} id="chat-list" aria-selected={activeTab === 'chat-list'} data-hs-tab="#chat-list" aria-controls="chat-list" role="tab">
                       Chat List
                    </button>
                    <button onClick={()=>onTabChange('user-list')} type="button" className={`cursor-pointer hover:bg-gray-100 font-medium text-gray-500 hover:text-gray-800 rounded-md py-2 px-2.5 inline-flex items-center gap-x-2 border-b-2 border-transparent text-xs whitespace-nowrap focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none ${activeTab === 'user-list' ? 'bg-gray-100 text-gray-800' : ''}`} id="user-list" aria-selected={activeTab === 'user-list'} data-hs-tab="#user-list" aria-controls="user-list" role="tab">     
                        User List
                    </button>
                </nav>
            </div>
  )
}

export default ChatSidebarTabs
