const supertest = require("supertest");
const host = "https://dictionary.iachieved.it//dictionary/";
const request = supertest(host);
const TOKEN = "cWFjYW5kaWRhdGU6c29mdEtpdHR5TGl0dGxlQmFsbG9mRnVy";
const TOKENBAD = "cWFjYW5kaWRhdGU6c29mdEtpdHR5TGl0dGxlQmFsbG";


describe("Create/Modify a key value pair", () => {
    it("Create a new key-value pair", async () => {
        const response = await request.post("023be2ec-8f78-4754-aed2-2b3e8ee7aca3/keys/Betatest")
            .send({
                "value": "Beta1"
            })
            .set('Authorization', `Basic ${TOKEN}`)
            .set('Content-type', 'application/json')
        expect(response.statusCode).toBe(201);
        expect(response.headers['content-type']).toBe('application/json');

    });

    it("Create a new key-value pair with invalid auth", async () => {
        const response = await request.post("023be2ec-8f78-4754-aed2-2b3e8ee7aca3/keys/Betatest")
            .send({
                "value": "Beta1"
            })
            .set('Authorization', `Basic ${TOKENBAD}`)
            .set('Content-type', 'application/json')
        expect(response.statusCode).toBe(401);
        expect(response.headers['content-type']).toBe('text/plain');
    });

    it("Modify key-value pair", async () => {
        const response = await request.post("023be2ec-8f78-4754-aed2-2b3e8ee7aca3/keys/Betatest")
            .send({
                "value": "Beta2"
            })
            .set('Authorization', `Basic ${TOKEN}`)
            .set('Content-type', 'application/json')
        expect(response.statusCode).toBe(201);
        expect(response.headers['content-type']).toBe('application/json');

    });


});