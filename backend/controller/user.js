import express from "express";
import Users from "../model/user.js"; // Adjust the path as necessary
import jwt from "jsonwebtoken";
const router = express.Router();
import bcrypt from "bcrypt";
const saltRounds = 10;

router.post("/register", async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    let isUserExist = await Users.findOne({ email });
    
    if (isUserExist) {
        return res.status(400).send({ message: "User already exists" });
    }
    
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    let user = await new Users({ fullname, email, password:hashedPassword }).save();
    let token = jwt.sign({
       id: user._id,
       fullname: user.fullname,
       email: user.email,
       }, process.env.JWT_SECRET, { expiresIn: parseInt(process.env.JWT_EXPIRATION) });
    
    // Handle user registration logic here
    return res
      .status(201)
      .send({ message: "User registered successfully", token });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error registering user", error: error.message });
  }
});
router.post("/login", async (req, res) => {
  try {
    const {  email, password } = req.body;
    let isUserExist = await Users.findOne({ email });
    if (!isUserExist) {
        return res.status(400).send({ message: "User does not exist" });
    }
    const matchedPassword = await bcrypt.compare(password, isUserExist.password);
    if(!matchedPassword) {
        return res.status(400).send({ message: "Invalid credentials" });
    }
    let token = jwt.sign({
        id: isUserExist._id,
        fullname: isUserExist.fullname,
        email: isUserExist.email,
        }, process.env.JWT_SECRET, { expiresIn: parseInt(process.env.JWT_EXPIRATION) });
    
      return res.status(200).send({ message: "Login successful", token});
        
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error registering user", error: error.message });
  }
});

export default router;
