# uc8-pratica-async-type-guards

Projeto referente à prática do encontro 4 sobre repositório, async/await, modo estrito e type guards.

## Descrição dos Arquivos

* `src/entidades.ts`: Define as interfaces de dados `Categoria`, `Produto`, `Movimentacao` e o tipo `TipoMovimentacao`.
* `src/servicos.ts`: Implementa as cargas de dados assíncronas, simulação de atraso, tratamento de erros com `try/catch`, consulta paralela com `Promise.all` e funções de busca em modo estrito.
* `src/guardas.ts`: Contém os type guards `ehProduto` e `ehMovimentacao` para validação e filtragem de tipos em tempo de execução.
* `src/main.ts`: Executa o fluxo da aplicação chamando o carregamento dos dados, invocando as funções de consulta e aplicando o filtro de movimentações de saída.
