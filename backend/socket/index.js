import { Server } from "socket.io";
import { saveMessage } from "../controller/message.js";
let onlineUsers = [];

const addUser = (user, socketId) => {
  const existingIndex = onlineUsers.findIndex(u => u.id === user?.id);
  if (existingIndex !== -1) {
    onlineUsers.splice(existingIndex, 1);
  }
  if(user) {
    user.socketId = socketId;
    onlineUsers.push(user);
  }
};

const removeUser = (socketId) => {
  const isExist = onlineUsers.findIndex((item) => item.socketId === socketId);
  if (isExist !== -1) {
    onlineUsers.splice(isExist, 1);
  }
  // onlineUsers = onlineUsers.filter(user => user.socketId !== socketId);
};

export const socketHandler = server => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    }
  });
  io.on("connection", (socket) => {
    socket.on("ADD_USER", (user) => {
      addUser(user, socket.id);
      io.emit("USER_ADDED", onlineUsers);

      // Get other users (exclude the current one)
      // const otherUsers = onlineUsers.filter(u => u.id !== user.id);

      // Send only to the newly connected user

      // Optionally notify others that this user joined (if needed)
      // socket.broadcast.emit("USER_ADDED", {
      //   onlineUsers: onlineUsers.filter(u => u.id !== socket.id)
      // });

      
    });
    socket.on("SEND_MESSAGE", (data) => {
      saveMessage(data);
      socket.to(data?.receiver?.socketId).emit("RECEIVED_MESSAGE", data);
    });


    socket.on("disconnect", () => {
      // console.log(socket.id, 'disconnected');
      removeUser(socket.id);
      io.emit("USER_ADDED", onlineUsers);
      // Notify everyone with updated list (excluding themselves)
      // onlineUsers.forEach(user => {
      //   const socketForUser = io.sockets.sockets.get(user.socketId);
      //   if (socketForUser) {
      //     const otherUsers = onlineUsers.filter(u => u.id !== user.id);
      //     socketForUser.emit("USER_ADDED", { onlineUsers: otherUsers });
      //   }
      // });
    });
  });
};
