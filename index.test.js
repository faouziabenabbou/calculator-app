const request = require("supertest");
const app = require("./index");

describe("Calculator API", () => {
    test("Addition of 5 and 3", async () => {
        const res = await request(app).get("/add/5/3");
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(8);
    });

    test("Subtraction of 5 and 3", async () => {
        const res = await request(app).get("/subtract/5/3");
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(2);
    });

    test("Multiplication of 5 and 3", async () => {
        const res = await request(app).get("/multiply/5/3");
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(15);
    });

    test("Division of 6 by 3", async () => {
        const res = await request(app).get("/divide/6/3");
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(2);
    });

    test("Division by zero", async () => {
        const res = await request(app).get("/divide/6/0");
        expect(res.statusCode).toBe(400);
        expect(res.body.error).toBe("Division by zero");
    });
});
