import { pgTable, serial, text, boolean, timestamp, integer, uuid } from 'drizzle-orm/pg-core';

export const perfis = pgTable('perfis', {
  id: uuid('id').primaryKey(),
  nome: text('nome').notNull(),
  email: text('email').notNull(),
  tipo: text('tipo').notNull().default('leitor'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const categorias = pgTable('categorias', {
  id: serial('id').primaryKey(),
  nome: text('nome').notNull(),
  emoji: text('emoji'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const receitas = pgTable('receitas', {
  id: serial('id').primaryKey(),
  titulo: text('titulo').notNull(),
  categoriaId: integer('categoria_id').references(() => categorias.id),
  autorId: uuid('autor_id').references(() => perfis.id),
  ingredientes: text('ingredientes'),
  modoPreparo: text('modo_preparo'),
  tempo: text('tempo'),
  porcoes: integer('porcoes'),
  dificuldade: text('dificuldade'),
  emoji: text('emoji'),
  publicada: boolean('publicada').default(false),
  createdAt: timestamp('created_at').defaultNow(),
});

export const comentarios = pgTable('comentarios', {
  id: serial('id').primaryKey(),
  receitaId: integer('receita_id').references(() => receitas.id),
  usuarioId: uuid('usuario_id').references(() => perfis.id),
  texto: text('texto').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});