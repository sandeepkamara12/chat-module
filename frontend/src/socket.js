import io from "socket.io-client";
const url = 'http://localhost:3000'; // Adjust the URL as needed

const socket = io(url, {
    transports: ['websocket'], // Use WebSocket transport
    reconnectionAttempts: 5, // Number of reconnection attempts
    reconnectionDelay: 1000, // Delay between reconnection attempts in milliseconds
});

// socket.on('connect', () => {
//     console.log('Connected to the server');
// });t

// socket.on('chat message', (msg) => {
//     console.log('New message:', msg);
// });

export default socket;
