import { Categoria, Movimentacao, Produto } from './entidades.js';

const produtos: Produto[] = [
  { id: 1, nome: 'Teclado', descricao: 'Teclado mecânico RGB', categoriaId: 1, quantidade: 10 },
  { id: 2, nome: 'Mouse', categoriaId: 1, quantidade: 15 }
];

const categorias: Categoria[] = [
  { id: 1, nome: 'Periféricos' },
  { id: 2, nome: 'Monitores' }
];

const movimentacoes: Movimentacao[] = [
  { id: 1, produtoId: 1, tipo: 'entrada', quantidade: 5, data: '2026-09-01' },
  { id: 2, produtoId: 1, tipo: 'saida', quantidade: 2, data: '2026-09-02' }
];

export function esperar(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function carregarProdutos(): Promise<Produto[]> {
  await esperar(100);
  return produtos;
}

export async function carregarCategorias(): Promise<Categoria[]> {
  await esperar(100);
  return categorias;
}

export async function carregarMovimentacoes(falhar: boolean): Promise<Movimentacao[]> {
  await esperar(100);
  if (falhar) {
    throw new Error('Falha ao carregar movimentacoes');
  }
  return movimentacoes;
}

export async function carregarMovimentacoesComAviso(falhar: boolean): Promise<Movimentacao[]> {
  try {
    return await carregarMovimentacoes(falhar);
  } catch (erro) {
    console.log('Falha ao carregar movimentacoes', erro);
    return [];
  }
}

export async function carregarTudo(falharMovimentacoes: boolean = false): Promise<[Produto[], Categoria[], Movimentacao[]]> {
  return await Promise.all([
    carregarProdutos(),
    carregarCategorias(),
    carregarMovimentacoesComAviso(falharMovimentacoes)
  ]);
}

export function buscarProduto(id: number): Produto | undefined {
  return produtos.find((p) => p.id === id);
}

export function nomeDoProduto(id: number): string {
  const produto = buscarProduto(id);
  return produto ? produto.nome : 'produto nao encontrado';
}

export function tamanhoDaDescricao(id: number): number {
  const produto = buscarProduto(id);
  return produto?.descricao?.length ?? 0;
}