import request from 'supertest';
import app from '../app';

describe('Validações dos Endpoints', () => {
  it('deve retornar 400 para perfil com email inválido', async () => {
    const res = await request(app).post('/api/profiles').send({
      name: 'Dev',
      email: 'invalido'
    });
    expect(res.status).toBe(400);
  });

  it('deve retornar 400 para projeto com URLs inválidas', async () => {
    const res = await request(app).post('/api/projects').send({
      title: '',
      description: 'curta',
      repositoryUrl: 'url-invalida',
      profileId: 'not-uuid'
    });
    expect(res.status).toBe(400);
  });
});
