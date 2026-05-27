import { Router } from 'express';
import { db } from '../db';
import { receitas } from '../db/schema';
import { eq } from 'drizzle-orm';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const result = await db.select().from(receitas).where(eq(receitas.publicada, true));
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar receitas' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await db.select().from(receitas).where(eq(receitas.id, Number(req.params.id)));
    if (result.length === 0) return res.status(404).json({ error: 'Receita não encontrada' });
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar receita' });
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await db.insert(receitas).values(req.body).returning();
    res.status(201).json(result[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar receita' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const result = await db.update(receitas).set(req.body).where(eq(receitas.id, Number(req.params.id))).returning();
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar receita' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await db.delete(receitas).where(eq(receitas.id, Number(req.params.id)));
    res.json({ message: 'Receita deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar receita' });
  }
});

export default router;