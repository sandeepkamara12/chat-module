import { Server } from "socket.io";
const onlineUsers = [];
const addUser = (user) => {
    console.log(user, 'babbay')
    // console.log("addUser function called");
    const isExistingUser = onlineUsers.findIndex(u => u.id === user.id);
    if (isExistingUser !== -1) {
        onlineUsers.splice(isExistingUser, 1);
        console.log(onlineUsers, 'onlineUsers after add');
    }
    // user.socketId = user.socketId || null;
    // onlineUsers.push(user);
}
export const socketHandler = server => {
  const io = new Server(server, {
    cors: {
      origin: "*", 
    }
  });
  io.on("connection", socket => {
    socket.on("ADD_USER", user => {
      console.log("user added:", user);
      addUser(user, socket.id);
      io.emit("USER_ADDED", {
        user: user,
        onlineUsers: onlineUsers
      }); // Broadcast to all
    });

    socket.on("disconnect", () => {
      console.log("user disconnected", socket.id);
    });

    // socket.on("chat message", msg => {
    //   console.log("message:", msg);
    //   io.emit("chat message", msg); // Broadcast to all
    // });
  });
  console.log(`server connected: ${server.id}`);
};
