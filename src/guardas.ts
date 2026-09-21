import { Categoria, Movimentacao, Produto } from './entidades.js';

export function ehProduto(item: Produto | Categoria): item is Produto {
  return 'categoriaId' in item;
}

export function ehMovimentacao(item: Produto | Movimentacao): item is Movimentacao {
  return 'tipo' in item;
}