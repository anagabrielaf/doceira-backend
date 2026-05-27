import { Router } from 'express';
import { db } from '../db';
import { perfis } from '../db/schema';
import { eq } from 'drizzle-orm';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const result = await db.select().from(perfis);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await db.select().from(perfis).where(eq(perfis.id, req.params.id));
    if (result.length === 0) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await db.insert(perfis).values(req.body).returning();
    res.status(201).json(result[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const result = await db.update(perfis).set(req.body).where(eq(perfis.id, req.params.id)).returning();
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await db.delete(perfis).where(eq(perfis.id, req.params.id));
    res.json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
});

export default router;