import app from "../../app";
import req from "supertest";

let id: number;
describe("course controller ", () => {
  test("POST/course", async () => {
    const res = await req(app).post("/course/").send({ course: "javascript 5.0", description: "javascript" });
    id = res.body[0].id;
    expect(res.body[0].course).toBe("javascript 5.0");
    expect(res.body[0].description).toBe("javascript");
  });
  test("DELETE/course", async () => {
    const res = await req(app).delete(`/course/${id}`);
    expect(res.body).toEqual([{ id: id, course: "javascript 5.0", description: "javascript" }]);
  });
  test("GET/course", async () => {
    const res = await req(app).get("/course/");
    expect(res.statusCode).toBe(200);
    expect(res).toBeTruthy();
    console.log(res);
  });
  test("GET/course/id", async () => {
    const res = await req(app).get("/course/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ id: 1, course: "javascripst", description: "bam bam" }]);
  });
});
