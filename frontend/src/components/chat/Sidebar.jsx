import React, { useCallback, useState } from 'react'
import ChatList from './ChatList'
import ChatSidebarTabs from './ChatSidebarTabs'
import UserList from './UserList'

const Sidebar = ({onlineUsers}) => {
    console.log(onlineUsers, 'onlineUsers')
    const [activeTab, setActiveTab] = useState('chat-list');
    const handleTabChange = useCallback((tab) => {
        setActiveTab(tab);
    }, []);
    return (
        <div className='sidebar overflow-auto h-[calc(100vh-80px)] bg-white text-white max-w-full w-1/5'>
            <ChatSidebarTabs activeTab={activeTab} onTabChange={handleTabChange} />
            <div className="mt-3">
                {
                    activeTab === 'chat-list' &&
                    <div id="chat-list" role="tabpanel" aria-labelledby="chat-list">
                        <ChatList />
                    </div>
                }
                {activeTab === 'user-list' &&
                    <div id="user-list" role="tabpanel" aria-labelledby="user-list">
                            <UserList onlineUsers={onlineUsers} />
                    </div>
                }
            </div>


        </div>
    )
}

export default Sidebar
