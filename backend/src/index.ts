import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/myUserRoute";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database!"));

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute);

/*app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello!" });
});*/

app.listen(7000, () => {
  console.log("Server running on localhost:7000");
});
