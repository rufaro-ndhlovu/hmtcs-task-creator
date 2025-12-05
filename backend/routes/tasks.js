const express = require("express");
const router = express.Router();
const db = require("../db");

//Create a task
router.post("/", (req, res) => {
    const {title, description, status, dueDateTime} = req.body;

    //Validation
    if (!title || !status || !dueDateTime) {
        return res.status(404).json({error: "Missing required fields"});
    }

    const query = "INSERT INTO tasks (title, description, status, dueDateTime) VALUES (?, ?, ?, ?)";
    
    db.run(query, 
        [title, description || null, status, dueDateTime],
        function (err) {
            if (err) {
                return res.status(500).json({error: err.message });
            }

            //Return created task
            return res.status(201).json({
                id, title, description, status, dueDateTime
            });
        }
    )


}) 

export default router;