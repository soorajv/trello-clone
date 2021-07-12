import request from 'supertest';
import { app } from '../../app';

it('expecting 200 from list get by board get', async () => {
  await request(app)
    .get('/v1/list-by-board?boardId=60eb10901534a2ac3a32dae7')

    .expect(200);
});
it('expecting 400 missing query param', async () => {
  await request(app)
    .get('/v1/list-by-board')

    .expect(400);
});
