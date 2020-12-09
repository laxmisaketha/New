const supertest = require("supertest");
const host = "https://dictionary.iachieved.it//dictionary";
const request = supertest(host);
const TOKEN = "";
const TOKENBAD = "";

describe("Delete a Dictionary", () => {
    it("Validate Delete Dictionary", async () => {
        const response = await request.delete("/f54b16a7-5d75-4044-8ba7-4bef6adf8189")
            .send()
            .set('Authorization', `Basic ${TOKEN}`)
            .set('Content-Type', 'application/json')
        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toBe('application/json');
        console.log(response.statusCode)
        console.log(response.body)
        console.log(response.header)

    });

    it("Delete Dictionary - Validate 401 response", async () => {
        const response = await request.delete("/f54b16a7-5d75-4044-8ba7-4bef6adf8189")
            .send()
            .set('Authorization', `Basic ${TOKENBAD}`)
            .set('Content-Type', 'application/json')
        //.expect('Content-Type', 'text/plain')
        expect(response.statusCode).toBe(401);
        expect(response.headers['content-type']).toBe('text/plain');
        console.log(response.statusCode)
        console.log(response.body)
        console.log(response.header)
    });
})
