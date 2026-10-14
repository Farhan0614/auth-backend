import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import userRouter from "./Routes/userRouter.js";
import { globalErrorHandler } from "./controllers/errorController.js";
import AppError from "./utils/appError.js";

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

app.use((req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export default app;
