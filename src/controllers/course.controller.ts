import express, { Request, Response } from "express";
import { iCourse } from "../interfaces";
import { createCourse, getAllCourses } from "../service/course.service";
const route = express.Router();

route.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const courses = await getAllCourses();
    res.status(200).send(courses);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

route.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const { course, description }: iCourse = req.body;
    const newCourse = await createCourse(course, description);
    res.status(200).send(newCourse);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});
export default route;
