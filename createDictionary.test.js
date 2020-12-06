const supertest = require("supertest");
const host = "https://dictionary.iachieved.it//dictionary";
const request = supertest(host);
const TOKEN = "cWFjYW5kaWRhdGU6c29mdEtpdHR5TGl0dGxlQmFsbG9mRnVy";
const TOKENBAD = "cWFjYW5kaWRhdGU6c29mdEtpdHR5TGl0dGxlQmFsbG";

describe("Create a Dictionary", () => {
    it("Validate create dictionary", async () => {
        const response = await request.post("")
            .send()
            .set('Authorization', `Basic ${TOKEN}`)
            .set('Content-type', 'application/json')

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.headers['content-type']).toBe('application/json');
        //Adding below code just for verification
        console.log(response.body);
        // console.log(response.statusCode);
        console.log(response.header);
    });

    it("Validate Create dictionary with invalid auth code", async () => {
        const response = await request.post("")
            .send()
            .set('Authorization', `Basic ${TOKENBAD}`)
            .set('Content-type', 'application/json')
        expect(response.statusCode).toBe(401);
        //Adding below code just for verification
        console.log(response.body);
        //console.log(response.statusCode);
        console.log(response.header);
    })
})