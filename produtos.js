if (localStorage.getItem('logado') !== 'true') {
      window.location.href = 'login.html';
    }

    let listaProdutos = JSON.parse(localStorage.getItem('produtos')) || [];

    function atualizarTabela() {
      const tabela = document.getElementById('tabelaProdutos');
      tabela.innerHTML = '';
      listaProdutos.forEach((produto, posicao) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
          <td>${produto.codigo}</td>
          <td>${produto.descricao}</td>
          <td>${produto.estoque}</td>
          <td>R$ ${produto.valor.toFixed(2)}</td>
          <td>${produto.categoria}</td>
          <td>
            <button onclick="vender(${posicao})">Vender</button>
            <button onclick="comprar(${posicao})">Comprar</button>
            <button onclick="excluir(${posicao})">Excluir</button>
          </td>
        `;
        tabela.appendChild(linha);
      });
    }

    function vender(posicao) {
      if (listaProdutos[posicao].estoque > 0) {
        listaProdutos[posicao].estoque--;
        salvar();
      }
    }

    function comprar(posicao) {
      listaProdutos[posicao].estoque++;
      salvar();
    }

    function excluir(posicao) {
      listaProdutos.splice(posicao, 1);
      salvar();
    }

    function salvar() {
      localStorage.setItem('produtos', JSON.stringify(listaProdutos));
      atualizarTabela();
    }

    function logout() {
      localStorage.removeItem('logado');
      window.location.href = 'login.html';
    }

    atualizarTabela();