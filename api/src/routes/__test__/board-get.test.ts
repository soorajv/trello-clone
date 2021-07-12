import request from 'supertest';
import { app } from '../../app';

it('expecting 200 from board  get', async () => {
  await request(app)
    .get('/v1/board')

    .expect(200);
});
