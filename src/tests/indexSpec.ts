import supertest from "supertest";
import app from "../index";

const request = supertest(app);


describe("test end point", () => {
    it('test main route', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);

    });

    it("Test Image route", async () => {
        const name = "img1";
        const width = "200";
        const height = "200";
        const respond = await request.get(`/image/?name=${name}&width=${width}&height=${height}`);;
        expect(respond.status).toBe(200);
    });

});