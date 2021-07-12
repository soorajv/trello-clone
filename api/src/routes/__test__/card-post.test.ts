import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful card insert', async () => {
  return request(app)
    .post('/v1/card')
    .send({
      text: 'first card',
      listId: '60eb10971534a2ac3a32daea',
    })
    .expect(201);
});

it('returns a 400 with an invalid body', async () => {
  return request(app)
    .post('/v1/card')
    .send({
      name: 'First Board',
    })
    .expect(400);
});
