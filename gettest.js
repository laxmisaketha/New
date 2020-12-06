const supertest = require("supertest");
const host = "https://dictionary.iachieved.it/dictionary/";
const request = supertest(host);
const TOKEN = "cWFjYW5kaWRhdGU6c29mdEtpdHR5TGl0dGxlQmFsbG9mRnVy";
//https://dictionary.iachieved.it/dictionary/id/keys

describe("Test Suite", () => {
    it("should get disctionary id", async () => {
        const response = await request.get("130f7280-02d5-4fb5-bde5-ab46c85b9f1a/keys")
            .set('Authorization', `Basic ${TOKEN}`)
            .set('Accept', 'application/json')
            .expect(200)

        console.log(response.body);
        console.log(response.statusCode);

    })
})