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

  it("returns an object containing an array of results of recipes", async () => {
    const response = await request.get("/api/recipes/?food=cheeseburgers");
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an("object");
    expect(response.body.results).to.be.an("array");
  });

  it("returns an error when sending an empty query", async () => {
    const response = await request.get("/api/recipes/?food=");
    expect(response.status).to.equal(400);
    expect(response.body).to.be.an("object");
    expect(response.body.errors[0].type).to.equal("field");
  });
});
