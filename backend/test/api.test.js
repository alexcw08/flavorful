import { expect } from "chai";
import supertest from "supertest";
import app from "../src/app.js";

const request = supertest(app);

describe("API Endpoints testing", () => {
  it("returns 5 random recipes", async () => {
    const response = await request.get("/api/recipes-random");
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an("object");
    expect(response.body.recipes).to.be.an("array");
    expect(response.body.recipes.length).to.equal(5);
  });
});
