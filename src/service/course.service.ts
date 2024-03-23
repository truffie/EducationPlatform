import { createCourseDB, deleteCourseDB, getAllCoursesDB, getCourseByIdDB, getCourseByNameDB, updateCourseDB } from "../database/course.database";
import { iCourse } from "../interfaces";

const getAllCourses = async (): Promise<iCourse[]> => {
  const courses: iCourse[] = await getAllCoursesDB();
  if (!courses.length) throw new Error("empty courses data");
  return courses;
};
const getCourseById = async (id: number): Promise<iCourse[]> => {
  const course: iCourse[] = await getCourseByIdDB(id);
  if (!course.length) throw new Error("course id not found");
  return course;
};

const createCourse = async (course: string, description: string): Promise<iCourse[]> => {
  const findCourse: iCourse[] = await getCourseByNameDB(course);
  if (findCourse.length) throw new Error("course already exists");
  const newCourse: iCourse[] = await createCourseDB(course, description);
  return newCourse;
};

const updateCourse = async (id: number, body: iCourse): Promise<iCourse[]> => {
  const findCourse = await getCourseByIdDB(id);
  if (!findCourse.length) throw new Error("invalid course id");

  const findCourseName = await getCourseByNameDB(body.course);
  if (findCourseName.length && findCourseName[0].id !== findCourse[0]) throw new Error("course already exists");
  const course = { ...findCourse[0], ...body };
  const updatedCourse = await updateCourseDB(id, course.course, course.description);
  if (!updatedCourse.length) throw new Error("empty data");
  return updatedCourse;
};

const deleteCourse = async (id: number): Promise<iCourse[]> => {
  const findCourse = await getCourseByIdDB(id);
  if (!findCourse.length) throw new Error("invalid course id");

  const deletedCourse = await deleteCourseDB(id);

  return deletedCourse;
};

export { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse };
