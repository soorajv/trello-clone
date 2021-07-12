import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful board insert', async () => {
  return request(app)
    .post('/v1/board')
    .send({
      name: 'First Board',
      userId: '0001',
    })
    .expect(201);
});

it('returns a 400 with an invalid body', async () => {
  return request(app)
    .post('/v1/board')
    .send({
      name: 'First Board',
    })
    .expect(400);
});
