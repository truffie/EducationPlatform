import app from "../../app";
import req from "supertest";

let id: number;
describe("course controller POST & GET", () => {
  it("POST/course", async () => {
    const res = await req(app).post("/course/").send({ course: "javascript 5.0", description: "javascript" });
    id = res.body[0].id;
    expect(res.body[0].course).toBe("javascript 5.0");
    expect(res.body[0].description).toBe("javascript");
  });

  it("GET/course", async () => {
    const res = await req(app).get("/course/");
    expect(res.statusCode).toBe(200);
    expect(res).toBeTruthy();
  });
  it("GET/course/id", async () => {
    const res = await req(app).get("/course/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ id: 1, course: "javascripst", description: "bam bam" }]);
  });
});
describe("course controller PUT & DELETE", () => {
  it("PUT/course", async () => {
    const res = await req(app).put(`/course/${id}`).send({ course: "javascript 5.1" });
    expect(res.body[0].course).toBe("javascript 5.1");
    expect(res.body[0].description).toBe("javascript");
  });
  it("PUT/course #2", async () => {
    const res2 = await req(app).put(`/course/${id}`).send({ description: "javascript 5.1 cool!" });
    expect(res2.body[0].course).toBe("javascript 5.1");
    expect(res2.body[0].description).toBe("javascript 5.1 cool!");
  });
  it('"PUT/course #3 ', async () => {
    const res3 = await req(app).put(`/course/${id}`).send({ course: "" });
    expect(res3.body[0].description).toBe("javascript 5.1 cool!");
    expect(res3.body[0].course).toBe("javascript 5.1");
  });
  it("PUT/course should be return an error", async () => {
    try {
      await req(app).put(`/course/${id}`).send({ course: "typescriptik" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error.message).toBe("course already exists");
      }
    }
  });
  it("PUT/course should be return an error #2", async () => {
    try {
      await req(app).put(`/course/999`).send({ course: "typescriptik" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error.message).toBe("invalid course id");
      }
    }
  });
  it("DELETE/course", async () => {
    const res = await req(app).delete(`/course/${id}`);
    expect(res.body).toEqual([{ id: id, course: "javascript 5.1", description: "javascript 5.1 cool!" }]);
  });
});
