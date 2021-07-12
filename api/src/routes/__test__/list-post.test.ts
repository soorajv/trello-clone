import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful list insert', async () => {
  return request(app)
    .post('/v1/list')
    .send({
      name: 'Todo',
      boardId: '60eb10901534a2ac3a32dae7',
    })
    .expect(201);
});

it('returns a 400 with an invalid body', async () => {
  return request(app)
    .post('/v1/list')
    .send({
      name: 'First Board',
    })
    .expect(400);
});
