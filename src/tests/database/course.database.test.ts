import { createCourseDB, deleteCourseDB, getAllCoursesDB, getCourseByIdDB, getCourseByNameDB } from "../../database/course.database";
import { iCourse } from "../../interfaces";

const client = {
  query: jest.fn(),
  release: jest.fn(),
};
jest.mock("pg", () => {
  const pool = {
    connect: jest.fn(() => client),
  };
  return { Pool: jest.fn(() => pool) };
});

describe("getAllCoursesDB function", () => {
  test("should return success", async () => {
    const mockCourses: iCourse[] = [
      { id: 1, course: "js", description: "javascript" },
      { id: 2, course: "ts", description: "typescript" },
    ];
    client.query.mockResolvedValue({ rows: mockCourses });
    const allCourses = await getAllCoursesDB();
    expect(allCourses).toEqual(mockCourses);
  });
});

describe("getCourseByIdDb function", () => {
  test("should  be success", async () => {
    client.query.mockResolvedValue({ rows: [{ id: 1, course: "js", description: "javascript" }] } as { rows: iCourse[] });
    const course: iCourse[] = await getCourseByIdDB(1);
    expect(course).toEqual([{ id: 1, course: "js", description: "javascript" }]);
  });
});

describe("createCourseDB function", () => {
  test("should return success", async () => {
    client.query.mockResolvedValue({ rows: [{ id: 1, course: "js", description: "javascript" }] } as { rows: iCourse[] });
    const course = await createCourseDB("js", "javascript");
    expect(course).toEqual([{ id: 1, course: "js", description: "javascript" }]);
    expect(course).toHaveLength(1);
  });
});

describe("getCourseByNameDB function", () => {
  test("should return success ", async () => {
    client.query.mockResolvedValue({ rows: [{ id: 1, course: "javascript", description: "javascript" }] } as { rows: iCourse[] });
    const course = await getCourseByNameDB("javascript");
    expect(course).toEqual([{ id: 1, course: "javascript", description: "javascript" }]);
  });
});

describe("deleteCourseDB function", () => {
  test("should return success", async () => {
    const courses: iCourse[] = [
      { id: 1, course: "js", description: "javascript" },
      { id: 2, course: "js2", description: "javascript 2.0" },
      { id: 3, course: "js3", description: "javascript 3.0" },
    ];
    client.query.mockResolvedValue({ rows: courses[0] });
    const course = await deleteCourseDB(1);
    expect(course).toEqual(courses[0]);
  });
  describe("updateCourseDB function", () => {
    test("should return success", async () => {
      client.query.mockResolvedValue({ rows: [{ id: 1, course: "javascript", description: "javascript" }] } as { rows: iCourse[] });
      const course = await deleteCourseDB(1);
      expect(course).toEqual([{ id: 1, course: "javascript", description: "javascript" }]);
    });
    test("should return empty rows", async () => {
      client.query.mockResolvedValue({ rows: [] });
      const course = await deleteCourseDB(1);
      expect(course).toEqual([]);
    });
  });
});
