import express from 'express';
import cors from 'cors';
import profileRoutes from './routes/profile.routes';
import technologyRoutes from './routes/technology.routes';
import projectRoutes from './routes/project.routes';

const app = express();

app.use(cors());
app.use(express.json());

// Rota de status da API
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'DevShowcase API', version: '1.0.0' });
});

// Registro dos três grupos de rotas exigidos
app.use('/api/profiles', profileRoutes);
app.use('/api/technologies', technologyRoutes);
app.use('/api/projects', projectRoutes);

export default app;
