import request from 'supertest';
import app from '../app';

describe('GET /seamless', () => {
  test('responds with 200 and "Seamless" on /seamless', async () => {
    const response = await request(app).get('/seamless');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Seamless');
  });
});
