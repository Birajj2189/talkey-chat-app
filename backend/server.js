// Import the express module
const express = require("express");
const dotenv = require("dotenv");
// const mongoose = require("mongoose");

dotenv.config();

const connectDB = require('./config/db');
const chats = require("./data/data");
const userRoutes = require("./routes/userRoutes");
const {notFound,errorHandler} = require('./middleware/errorMiddleware');  

 
// Create an Express application
const app = express();

// connect to database
connectDB();

// Set up routes, middleware, etc.
app.use(express.json());

app.get("/", (req, res) => {
  res.send("App is running");
});

app.use('/api/user', userRoutes);

// error handling middlewares
app.use(notFound);
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(process.env.MONGO_URI);
});
