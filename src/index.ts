import express from "express";
import { userRouter } from "./routes/user.routes";
import { pingRouter } from "./routes/ping.routes";

const app = express();
const PORT = 3000

// middlewares
app.use(express.json())

// routes
app.use('/ping', pingRouter)
app.use('/api/users', userRouter)

app.listen(PORT, () => {
    console.log("App listening on 3000")
})

