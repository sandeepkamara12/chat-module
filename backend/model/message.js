import mongoose from "mongoose";
const messageSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    sender: {
      id:{
        type:String,
        // type:mongoose.Schema.Types.ObjectId,
        required: true
      },
      fullname:{
        type:String,
        required:true
      },
      email:{
        type:String,
        required:true,
      },
    },
    receiver: {
    id:{
        // type:mongoose.Schema.Types.ObjectId,
        type:String,
        required: true
      },
      fullname:{
        type:String,
        required:true
      },
      email:{
        type:String,
        required:true,
      },
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Messages", messageSchema); // 'users' is the collection name in MongoDB
