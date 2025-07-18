import React, { useRef, useState } from 'react'
import axios from 'axios';
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
  const [replyMessage, setReplyMessage] = useState({});
  const [roomData, setRoomData] = useState({ room: null,  receiver: null });


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
        console.log(data, 'hello dear');
        setAllMessages(prev => [...prev, data]);
      });
     socketRef.current.on("DELETED_MESSAGE", (data) => {
        setAllMessages((prevState) =>
          prevState.filter((item) => item._id != data.message._id)
        );
      });
      
      return () => socketRef.current.disconnect();
    }
  }, [connected, state]);

  const handleSendMessage = useCallback((message) => {
    if (socketRef.current.connected) {
      let sender = state;
      sender.socketId = socketRef?.current?._id
    
      let data = {
        message: message,
        sender: sender,
        receiver: roomData?.receiver
      }
      if(replyMessage) {
        data.replyMessage = replyMessage;
      }
      socketRef.current.emit('SEND_MESSAGE', data);
      setAllMessages(prev => [...prev, data]);
    }
  }, [state, roomData, replyMessage])

    const deleteMessage = useCallback(async (messageId) => {
        try {
          let deletedItem = await axios.delete(`http://localhost:3000/message/${messageId}`);
          console.log(deletedItem, 'deletedItem', roomData?.receiver);
            if (socketRef.current.connected) {
              let data = {
                message: deletedItem?.data?.data,
                receiver: roomData?.receiver
              }
              socketRef.current.emit('DELETE_MESSAGE', data);   
              setAllMessages(prev=>prev.filter(data=>data._id!=deletedItem?.data?.data?._id))
           }
        } catch (error) {
            console.log(error, 'error while delete a message');
        }
    }, [roomData?.receiver]);

  return (
    <div className='flex h-[calc(100vh-80px)] w-full mx-auto'>
      <Sidebar setAllMessages={setAllMessages} onlineUsers={onlineUsers} setRoomData={setRoomData} />
      <ChatModule setReplyMessage={setReplyMessage} replyMessage={replyMessage} deleteMessage={deleteMessage} currentUser={state} allMessages={allMessages} roomData={roomData} handleSendMessage={handleSendMessage} />
      <Profile user={state} currentUser={JSON.parse(sessionStorage.getItem('user'))} />
    </div>
  )
}

export default Chat