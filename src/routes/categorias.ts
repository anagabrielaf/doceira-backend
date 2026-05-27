import { Router } from 'express';
import { db } from '../db';
import { categorias } from '../db/schema';
import { eq } from 'drizzle-orm';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const result = await db.select().from(categorias);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar categorias' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await db.select().from(categorias).where(eq(categorias.id, Number(req.params.id)));
    if (result.length === 0) return res.status(404).json({ error: 'Categoria não encontrada' });
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar categoria' });
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await db.insert(categorias).values(req.body).returning();
    res.status(201).json(result[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar categoria' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const result = await db.update(categorias).set(req.body).where(eq(categorias.id, Number(req.params.id))).returning();
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar categoria' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await db.delete(categorias).where(eq(categorias.id, Number(req.params.id)));
    res.json({ message: 'Categoria deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar categoria' });
  }
});

export default router;