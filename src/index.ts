import express from "express";
import { userGetRouter } from "./routes/userGet.routes";
import { userPostRouter } from "./routes/userPost.routes";
import { pingRouter } from "./routes/ping.routes";

const app = express();
const PORT = 3000;

// middlewares
app.use(express.json());

// routes
app.use("/ping", pingRouter);
app.use("/submit", userPostRouter);
app.use("/read", userGetRouter);

app.listen(PORT, () => {
  console.log("App listening on 3000");
});
