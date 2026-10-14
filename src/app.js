import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import userRouter from "./Routes/userRouter.js";
const app = express();

// json body parser
app.use(express.json());
// for security headers
app.use(helmet());
// cross-origin requests
app.use(cors());

// for development request logs
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/user", userRouter);

export default app;
