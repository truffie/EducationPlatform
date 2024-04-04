import { createCourse, getAllCourses, getCourseById } from "../../service/course.service";
import { iCourse } from "../../interfaces";
import * as objRepository from "../../database/course.database";

describe("getCourse", () => {
  test("getCourse by ID success", async () => {
    const mock = jest.spyOn(objRepository, "getCourseByIdDB");
    mock.mockResolvedValue([{ id: 1, course: "course", description: "desc" }]);

    const response = await getCourseById(1);
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith(1);
    expect(response).toEqual([{ id: 1, course: "course", description: "desc" }]);
  });
  test("getCourse by ID should be return an error", async () => {
    const mock = jest.spyOn(objRepository, "getCourseByIdDB");
    mock.mockResolvedValue([]);
    try {
      await getCourseById(1);
    } catch (error: any) {
      expect(error.message).toBe("course id not found");
    }
  });
});

describe("getAllCourses", () => {
  test("should be success ", async () => {
    const mock = jest.spyOn(objRepository, "getAllCoursesDB");
    mock.mockResolvedValue([
      { id: 1, course: "TS", description: "description" },
      { id: 2, course: "JS", description: "desc" },
    ]);
    const response = await getAllCourses();

    expect(mock).toHaveBeenCalled();
    expect(response).toEqual([
      { id: 1, course: "TS", description: "description" },
      { id: 2, course: "JS", description: "desc" },
    ]);
  });

  test("should be return an error ", async () => {
    const mock = jest.spyOn(objRepository, "getAllCoursesDB");
    mock.mockResolvedValue([]);
    try {
      await getAllCourses();
    } catch (error: any) {
      expect(error.message).toBe("empty courses data");
    }
  });
});

describe("createCourse funciton", () => {
  test("createCourse success", async () => {
    const mockCreate = jest.spyOn(objRepository, "createCourseDB");
    const mockGet = jest.spyOn(objRepository, "getCourseByNameDB");

    mockGet.mockResolvedValue([]);
    mockCreate.mockResolvedValue([{ course: "test", description: "test" }]);

    const response: iCourse[] = await createCourse("test", "test");

    expect(response).toEqual([{ course: "test", description: "test" }]);

    expect(mockCreate).toHaveBeenCalled();

    expect(mockCreate).toHaveBeenCalledWith("test", "test");
  });
});
