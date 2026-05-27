import { Router } from 'express';
import { db } from '../db';
import { comentarios } from '../db/schema';
import { eq } from 'drizzle-orm';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const result = await db.select().from(comentarios);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar comentários' });
  }
});

router.get('/receita/:receitaId', async (req, res) => {
  try {
    const result = await db.select().from(comentarios).where(eq(comentarios.receitaId, Number(req.params.receitaId)));
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar comentários' });
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await db.insert(comentarios).values(req.body).returning();
    res.status(201).json(result[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar comentário' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await db.delete(comentarios).where(eq(comentarios.id, Number(req.params.id)));
    res.json({ message: 'Comentário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar comentário' });
  }
});

export default router;