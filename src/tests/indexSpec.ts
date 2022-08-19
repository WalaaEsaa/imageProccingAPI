import supertest from "supertest";
import app from "../index";

const request = supertest(app);


describe("test input image data", () => {
    it('gets the path of image route', async () => {
        const response = await request.get('/image');
        expect(response.status).toBe(200);

    });

    it("Test Image data input", async () => {
        const name = "img1";
        const width = "200";
        const height = "200";
        const respond = await request.get(`/image/?name=${name}&width=${width}&height=${height}`);;
        expect(respond.status).toBe(200);
    });

});