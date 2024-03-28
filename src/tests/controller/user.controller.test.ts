import app from "../../app";
import req from "supertest";
import { iUser } from "../../interfaces";

let id: number;
describe("test user controller", () => {
  test("POST/user ", async () => {
    const { body, statusCode } = await req(app)
      .post("/user/")
      .send({ name: "1", surname: "2", email: "test1234@test.test", pwd: "123456" } as iUser);
    id = body[0].id;
    expect(statusCode).toBe(200);
  });
  test("GET/user", async () => {
    const res = await req(app).get(`/user/`);
    console.log(res.body);
    expect(res.statusCode).toBe(200);
  });
  test("DELETE/user", async () => {
    const res = await req(app).delete(`/user/${id}`);
    expect(res.statusCode).toBe(200);
  });
});
