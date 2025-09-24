import express from "express";
import logTimestamp from "./timeStamp.js";
import connectDb from "./db.js";
import homeRoutes from "./router/homeRouter.js";
import userRoutes from "./router/userRouter.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(logTimestamp);

connectDb();

app.use("/home", homeRoutes);
app.use("/users", userRoutes);

app.use((req, res) => {
    res.status(404).send("Not found");
});

app.listen(PORT, () => {
    console.log(`The server is running at port ${PORT}`);
});
