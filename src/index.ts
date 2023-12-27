import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";

import pingRouter from "./routes/ping";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: "GET,POST,PUT,DELETE,OPTIONS",
  })
);

app.use(express.json());
app.use(morgan("dev"));

mongoose.connect(process.env.MONGO_URL || "");

app.use("/ping", pingRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
