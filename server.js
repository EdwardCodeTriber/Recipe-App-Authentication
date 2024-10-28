import "dotenv/config"
import express from "express"
import cors from "cors"
import connectDB from "./config/database.js";
import router from "./routes/api.js";

//App start
const app = express();
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(cors());
// App use imported router with endpoints into an active server/api
app.use("/api", router)


// MongoDB connection with the .env file
connectDB()

// PORT Start
app.listen(PORT, ()=> console.log(`Server running ${PORT}`))