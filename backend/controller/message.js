import express from 'express';
import mongoose from 'mongoose';
const messageRouter = express.Router();

import Messages from '../model/message.js';

export const saveMessage = async(data) => {
    try {
        let message = await new Messages(data).save();
        return message;
    } catch (error) {
     console.log(error, 'error');
    }
}

messageRouter.get('/:id', async(req, res)=>{
     try {
        let id = req.params.id;
        if(!id) {
            return res.status(400).json({message:"User id is required."})
        }
        const allMessages = await Messages.find({
            $or:[{"sender._id":id}, {"receiver._id":id}]
        })
        return res.status(200).json({data:allMessages, message:"All Messages"});
    } catch (error) {
      console.log(error, 'error');
    }
});
messageRouter.delete('/:id', async(req, res)=>{
    try {
        let id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: "message ID required." });
        }
        const deleteMessage = await Messages.findByIdAndDelete(id);
        // console.log(deleteMessage, 'deleteMessage');
        return res.status(200).json({data:deleteMessage, message:"Delete Messages"});
    } catch (error) {
     console.log(error, 'error');
    }
});
export default messageRouter;