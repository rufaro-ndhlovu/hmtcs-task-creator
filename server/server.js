import express from "express";
import cors from "cors";
import tasksRouter from "./routes/tasks.js";

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/components/tasks", tasksRouter);

//Start server
const port = 4000;
app.listen(4000, () => {
    console.log("Server running on localhost 4000");
});