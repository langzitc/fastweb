import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/home.test.ts', () => {
  it('should GET /api/admin/componentlist', async () => {
    const result = await app.httpRequest().get('/api/admin/componentlist').expect(200);
    assert(result.status === 200);
  });
  it('should POST /api/admin/login', async () => {
    app.mockCsrf();
    const result = await app.httpRequest().post('/api/admin/login')
      .send({ username: 'admin', password: 'admin' })
      .expect(200);
    assert(result.text === '{}');
  });
});
