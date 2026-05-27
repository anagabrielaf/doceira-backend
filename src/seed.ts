import { db } from './db';
import { categorias, receitas } from './db/schema';

async function seed() {
  console.log('Populando banco de dados...');

  // Inserir categorias
  await db.insert(categorias).values([
    { nome: 'Bolos', emoji: '🎂' },
    { nome: 'Bombons', emoji: '🍫' },
    { nome: 'Tortas', emoji: '🥧' },
    { nome: 'Sobremesas', emoji: '🍰' },
    { nome: 'Cookies', emoji: '🍪' },
    { nome: 'Doces Típicos', emoji: '🍬' },
  ]);

  // Inserir receitas
  await db.insert(receitas).values([
    {
      titulo: 'Brigadeiro Gourmet',
      categoriaId: 2,
      ingredientes: '1 lata de leite condensado\n1 colher de manteiga\n3 colheres de chocolate em pó\nGranulado a gosto',
      modoPreparo: 'Misture tudo e leve ao fogo médio até desgrudar da panela. Enrole e passe no granulado.',
      tempo: '30 min',
      porcoes: 20,
      dificuldade: 'Fácil',
      emoji: '🍫',
      publicada: true,
    },
    {
      titulo: 'Bolo de Cenoura',
      categoriaId: 1,
      ingredientes: '3 cenouras\n3 ovos\n1 xícara de óleo\n2 xícaras de farinha\n2 xícaras de açúcar',
      modoPreparo: 'Bata as cenouras com ovos e óleo. Misture com farinha e açúcar. Asse por 40 min.',
      tempo: '50 min',
      porcoes: 10,
      dificuldade: 'Fácil',
      emoji: '🥕',
      publicada: true,
    },
    {
      titulo: 'Pavê de Chocolate',
      categoriaId: 4,
      ingredientes: '1 pacote de biscoito\n1 caixa de creme de leite\n200g de chocolate',
      modoPreparo: 'Monte camadas de biscoito e creme. Leve à geladeira por 2 horas.',
      tempo: '20 min',
      porcoes: 8,
      dificuldade: 'Fácil',
      emoji: '🍰',
      publicada: true,
    },
    {
      titulo: 'Trufa de Maracujá',
      categoriaId: 2,
      ingredientes: '200g de chocolate branco\n100ml de creme de leite\n50ml de suco de maracujá',
      modoPreparo: 'Derreta o chocolate, misture com creme e maracujá. Resfrie e enrole.',
      tempo: '40 min',
      porcoes: 15,
      dificuldade: 'Médio',
      emoji: '🍬',
      publicada: true,
    },
    {
      titulo: 'Cheesecake de Morango',
      categoriaId: 3,
      ingredientes: '200g de cream cheese\n1 lata de leite condensado\n200g de morango',
      modoPreparo: 'Misture cream cheese e leite condensado. Monte sobre base de biscoito. Decore com morangos.',
      tempo: '30 min',
      porcoes: 8,
      dificuldade: 'Médio',
      emoji: '🍓',
      publicada: true,
    },
  ]);

  console.log('✅ Banco populado com sucesso!');
  process.exit(0);
}

seed().catch(console.error);