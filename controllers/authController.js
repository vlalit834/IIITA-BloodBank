import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import colors from "colors";
import jwt from "jsonwebtoken";
//For registration
const registerController = async (req, res) => {
  try {
    const exisitingUser = await userModel.findOne({ email: req.body.email });
    //validation
    if (exisitingUser) {
      //200 ok response
      return res.status(200).send({
        success: false,
        message: "User already exists",
      });
    }

    //If User not exists

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    //Rest data
    const user = new userModel(req.body);
    await user.save();

    //201 Created
    return res.status(201).send({
      sucess: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.log("authController registerController error:".bgRed.black, error);
    //500 Internal Server Error
    res.status(500).send({
      sucess: false,
      message: "Error in register API",
      error,
    });
  }
};

//For login
const loginController = async (req, res) => {
  try {
    const exisitingUser = await userModel.findOne({ email: req.body.email });

    if (!exisitingUser) {
      //404 Not found
      return res.status(404).send({
        success: false,
        message: "User Not found",
      });
    }

    //compare password
    const comparePassword = await bcrypt.compare(
      req.body.password,
      exisitingUser.password
    );
    if (!comparePassword) {
      return res.status(500).send({
        succes: false,
        message: "Invalid Credentials",
      });
    }
    //password is matched now
    const token = jwt.sign({ userID: exisitingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return res.status(200).send({
      succes: true,
      message: "Login Successfully",
      token,
      exisitingUser,
    });
  } catch (error) {
    console.log("authController loginController error:".bgRed.black, error);
    //500 Internal Server Error
    res.status(500).send({
      sucess: false,
      message: "Error in login API",
      error,
    });
  }
};

export { registerController, loginController };
