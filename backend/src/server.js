import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import flavorsRoutes from './routes/flavors.routes.js';
import contactRoutes from './routes/contact.routes.js';
import { initializeDatabase } from './db/database.js';

dotenv.config();
initializeDatabase();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:4200', credentials: true }));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'yasmina-backend' });
});

app.use('/api/auth', authRoutes);
app.use('/api/flavors', flavorsRoutes);
app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
  console.log(`Yasmina backend running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Yasmina backend ishlayapti');
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend working' });
});