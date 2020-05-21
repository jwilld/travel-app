import { port, app } from "./index.js";
import request  from "supertest";

let server, agent

beforeAll((done) => {
     server = app.listen(8081, () => {
         global.agent = request.agent(server);
         done();
     });
  });
  
  afterAll(async (done) => {
    await server.close(done);
  });
  
describe('server should be started', () => {
    test('response is succsesful', async () => {
        const result = await request('http://localhost:8080').get('/trips');
        expect(result.statusCode).toBe(200);
    })
})