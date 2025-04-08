import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const port = process.env.PORT || 5001;

const app = express();

app.get("/", (req, res) => {
    res.send("hello world")
});

app.listen(port, () => {
    console.log(`server started on port: ${port}`);
});