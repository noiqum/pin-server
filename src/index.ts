import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

dotenv.config();
const app: Express = express();
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.listen(process.env.PORT || 3000, () => {
  console.log("Example app listening on port 3000!");
});
