import { createCourseDB, getAllCoursesDB, getCourseDB } from "../database/course.database";
import { iCourse } from "../interfaces";

const getAllCourses = async (): Promise<iCourse[]> => {
  const courses: iCourse[] = await getAllCoursesDB();
  return courses;
};

const createCourse = async (course: string, description: string): Promise<iCourse[]> => {
  const findCourse: iCourse[] = await getCourseDB(course);
  if (findCourse.length) throw new Error("course already exists");
  const newCourse: iCourse[] = await createCourseDB(course, description);
  return newCourse;
};

export { getAllCourses, createCourse };
