import express, { Request, Response } from "express";
import { iCourse } from "../interfaces";
import { createCourse, deleteCourse, getAllCourses, getCourseById, updateCourse } from "../service/course.service";
import { buildResponse } from "../helper/response";
const route = express.Router();

route.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const courses = await getAllCourses();
    buildResponse(res, 200, courses);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const course = await getCourseById(+id);
    res.status(200).send(course);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const { course, description }: iCourse = req.body;
    const newCourse = await createCourse(course, description);
    res.status(200).send(newCourse);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.put("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedCourse = await updateCourse(+id, req.body);
    res.status(200).send(updatedCourse);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.delete("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedCourse = await deleteCourse(+id);
    buildResponse(res, 200, deletedCourse);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

export default route;
