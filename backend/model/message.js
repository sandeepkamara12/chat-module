import mongoose from "mongoose";
const messageSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true
    },
    sender: {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      fullname: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      }
    },
    receiver: {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      fullname: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      }
    },
    replyMessage:{}
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Messages", messageSchema); // 'users' is the collection name in MongoDB
