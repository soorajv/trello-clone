import request from 'supertest';
import { app } from '../../app';

it('expecting 200 from card  get', async () => {
  await request(app)
    .get('/v1/card')

    .expect(200);
});
