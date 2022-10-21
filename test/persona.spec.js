const supertest = require('supertest')
const app = require('../server')

describe('Post Endpoints', () => {
    it('should create a new user', async () => {
        const res = await supertest(app)
            .get('/api/person/')
            ;
        expect(res.statusCode).toEqual(200);
    });
});