import sqlite3 from "sqlite3";
const db = new sqlite3.Database("taskList.db", (err) => {
    if (err) {
        console.err("Error connecting to database", err.message);
    } else {
        console.log("Connected to the database");
    }
});



