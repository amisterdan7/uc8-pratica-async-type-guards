import {
  carregarTudo,
  buscarProduto,
  nomeDoProduto,
  tamanhoDaDescricao
} from './servicos';
import { ehMovimentacao } from './guardas';
import { Produto, Movimentacao } from './entidades';

async function executar() {
  const [produtos, categorias, movimentacoes] = await carregarTudo(true);

  console.log(`Produtos: ${produtos.length}`);
  console.log(`Categorias: ${categorias.length}`);
  console.log(`Movimentacoes: ${movimentacoes.length}`);

  const idTeste = 1;
  console.log(`Nome do produto ${idTeste}: ${nomeDoProduto(idTeste)}`);
  console.log(`Tamanho da descricao do produto ${idTeste}: ${tamanhoDaDescricao(idTeste)}`);

  const itensMistos: (Produto | Movimentacao)[] = [
    ...produtos,
    { id: 10, produtoId: 1, tipo: 'saida', quantidade: 2, data: '2026-09-02' }
  ];

  const saidas = itensMistos
    .filter(ehMovimentacao)
    .filter((m) => m.tipo === 'saida');

  console.log(`Saidas: ${saidas.length}`);
}

executar();