import React, { useRef, useState } from 'react'
import Sidebar from './Sidebar'
import { useEffect } from 'react'
import io from 'socket.io-client'
import Profile from './Profile'
import ChatModule from './ChatModule'
import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'
const PATH = "http://localhost:3000";

const Chat = () => {
  const {state} = useLocation();
  const socketRef = useRef(null);

  const [connected, setConnected] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [allMessages, setAllMessages] = useState([]);
  const [roomData, setRoomData] = useState({ room: null });


  useEffect(() => {
    const socket = io.connect(PATH);
    socketRef.current = socket;

    socket.on('connect', () => {
      console.log('Socket connected');
      setConnected(true);
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected', connected);
      setConnected(false);
    });

    // return () => {
    //   socketRef.current.disconnect();
    // }

  }, [connected]);

  useEffect(() => {
    if (connected && state) {
      socketRef.current.emit("ADD_USER", state);
      socketRef.current.on("USER_ADDED", data => setOnlineUsers(data));
      socketRef.current.on("RECEIVED_MESSAGE", data => {
        setAllMessages(prev => [...prev, data]);
        // if (roomData?.room?.socketId === data.room) {
        //   setRoomData(prev => ({ ...prev, messages: [...prev.messages, data] }));
        // }
      });
      
      return () => socketRef.current.disconnect();
    }
  }, [connected, state]);
console.log(allMessages, 'all messages'); 
  const handleSendMessage = useCallback((message) => {
    console.log('roomdata is : ', roomData);
    if (socketRef.current.connected) {
      let data = {
        message: message,
        sender: state,
        receiver: roomData?.receiver
      }
      socketRef.current.emit('SEND_MESSAGE', data);
      setAllMessages(prev => [...prev, data]);
    }
  }, [state, roomData])

  return (
    <div className='flex h-[calc(100vh-80px)] w-full mx-auto'>
      <Sidebar onlineUsers={onlineUsers} setRoomData={setRoomData} />
      <ChatModule currentUser={state} allMessages={allMessages} roomData={roomData} handleSendMessage={handleSendMessage} />
      <Profile user={state} currentUser={JSON.parse(sessionStorage.getItem('user'))} />
    </div>
  )
}

export default Chat