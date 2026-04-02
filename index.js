require("dotenv").config();
const express = require("express");

const dbConnection = require("./config/dbConnection");
const { registrationController, loginController, logOutController } = require("./controllers/authController");
const {profileCreateController, getProfile} = require("./controllers/profileCreateController");
const app = express();

app.use(express.json());
dbConnection();

app.post("/registration", registrationController);
app.post("/login", loginController);
app.post("/logout", logOutController);


// Profile Createt 
app.post("/profilecreate", profileCreateController);
app.get("/getprofile", getProfile);



const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
