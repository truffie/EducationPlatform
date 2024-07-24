import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { routeApi, routeCourse, routeLesson, routeUser } from "./controllers";

const App = express();

App.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5000"],
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
  }),
);

App.use(cookieParser());
App.use(express.json());

App.use("/api", routeApi);
App.use("/user", routeUser);
App.use("/course", routeCourse);
App.use("/lesson", routeLesson);
App.use((error: any, _req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(error.message);
  next();
});

export default App;
