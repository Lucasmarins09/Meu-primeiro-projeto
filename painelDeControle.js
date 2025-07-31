function logout() {
      localStorage.removeItem('logado');
      window.location.href = 'login.html';
    }

    document.addEventListener('DOMContentLoaded', () => {
      if (localStorage.getItem('logado') !== 'true') {
        window.location.href = 'login.html';
        return;
      }

      const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
      const estoqueTotal = produtos.reduce((soma, p) => soma + p.estoque, 0);
      const estoqueCategoriaB = produtos
        .filter(p => p.categoria === 'B')
        .reduce((soma, p) => soma + p.estoque, 0);
      const valorTotal = produtos.reduce((soma, p) => soma + p.estoque * parseFloat(p.valor), 0);

      document.getElementById('estoqueTotal').textContent = estoqueTotal;
      document.getElementById('estoqueCategoriaB').textContent = estoqueCategoriaB;
      document.getElementById('valorTotal').textContent = valorTotal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
      document.getElementById('totalProdutos').textContent = produtos.length;
    });