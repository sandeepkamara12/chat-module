import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";
import userController from "./controller/user.js"; // Adjust the path as necessary
import connectDB from "./config/db.js";
import { socketHandler } from "./socket/index.js";
import messageController from "./controller/message.js";
const app = express();
dotenv.config();
const server = createServer(app);

app.use(cors());
app.use(express.json());

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    server.listen(3000, () => {
      socketHandler(server);
      console.log("listening on *:3000");
    });
  })
  .catch(err => {
    console.error("Database connection failed:", err);
  });

app.use("/user", userController);
app.use("/message", messageController);
