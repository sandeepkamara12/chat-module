import express from 'express';
const messageRouter = express.Router();

import Messages from '../model/message.js';
export const saveMessage = async(data) => {
    try {
        let message = await new Messages(data).save();
        console.log(data,'data is');
        return message;
        // res.status(201).json({
        //     data:message,
        //     message:"message saved"
        // })
    } catch (error) {
        console.log(error, 'error is')
        // return res.status(500).json({
        //     message: "Server Error!"
        // })
    }
}

export const getMessages = async(req, res) => {

}