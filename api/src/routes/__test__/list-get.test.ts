import request from 'supertest';
import { app } from '../../app';

it('expecting 200 from list  get', async () => {
  await request(app)
    .get('/v1/list')

    .expect(200);
});
