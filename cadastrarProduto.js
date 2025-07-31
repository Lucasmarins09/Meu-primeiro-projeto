    if (localStorage.getItem('logado') !== 'true') {
      window.location.href = 'login.html';
    }

    document.getElementById('formularioProduto').addEventListener('submit', function(evento) {
      evento.preventDefault();
      const produto = {
        codigo: document.getElementById('codigo').value,
        descricao: document.getElementById('descricao').value,
        estoque: parseInt(document.getElementById('estoque').value),
        valor: parseFloat(document.getElementById('valor').value),
        categoria: document.getElementById('categoria').value
      };

      const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
      produtos.push(produto);
      localStorage.setItem('produtos', JSON.stringify(produtos));
      alert('Produto cadastrado com sucesso!');
      window.location.href = 'produtos.html';
    });

    function logout() {
      localStorage.removeItem('logado');
      window.location.href = 'login.html';
    }
