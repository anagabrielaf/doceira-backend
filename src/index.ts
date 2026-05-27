import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import receitasRouter from './routes/receitas';
import usuariosRouter from './routes/usuarios';
import categoriasRouter from './routes/categorias';
import comentariosRouter from './routes/comentarios';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/receitas', receitasRouter);
app.use('/usuarios', usuariosRouter);
app.use('/categorias', categoriasRouter);
app.use('/comentarios', comentariosRouter);

app.get('/', (req, res) => {
  res.json({ message: '🧁 DoceiraBR API rodando!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});