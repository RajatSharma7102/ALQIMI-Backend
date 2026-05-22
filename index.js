const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
const UserModel = require('./models/Users')

const app = express()
app.use(express.json())

app.use(cors())

// MongoDB Atlas connection
mongoose.connect("mongodb://registrationUser:Reg%40123456@ac-vjoi9pr-shard-00-00.dmkhr5i.mongodb.net:27017,ac-vjoi9pr-shard-00-01.dmkhr5i.mongodb.net:27017,ac-vjoi9pr-shard-00-02.dmkhr5i.mongodb.net:27017/?ssl=true&replicaSet=atlas-b6fehs-shard-0&authSource=admin&appName=Registration-cluster")
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch((err) => console.log(err));


// Registration API
app.post("/registration", async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const user = await UserModel.create(req.body);

    console.log("Data saved:", user);

    //For new user creation (success status)
    return res.status(200).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (err) {
    console.log("Save Error Code:", err.code);
    console.log("Save Error Message:", err.message);

    //For duplicate email (error code 409)
    if (err.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "This email can’t be used for registration.",
      });
    }

    //Server/Database error 
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
});

app.listen(3001, () => {
    console.log("Server is Running")
})