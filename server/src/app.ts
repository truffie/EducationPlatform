/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from "express";
import routeUser from "../src/controllers/user.controller";
import routeCourse from "../src/controllers/course.controller";
import routeApi from "../src/controllers/api.controller";
import cors from "cors";

const App = express();

App.use(
  cors({
    origin: ["http://localhost:5500", "http://localhost:3000"],
    credentials: true,
  }),
);
App.use(express.json());

App.use("/api", routeApi);
App.use("/user", routeUser);
App.use("/course", routeCourse);

App.use((error: any, _req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(error.message);
  next();
});

export default App;
