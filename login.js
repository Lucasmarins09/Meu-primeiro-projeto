     document.getElementById('formularioLogin').addEventListener('submit', function(evento) {
      evento.preventDefault();
      const usuario = document.getElementById('usuario').value;
      const senha = document.getElementById('senha').value;

      if (usuario === 'lucas' && senha === '1234') {
        localStorage.setItem('logado', 'true');
        window.location.href = 'painelDeControle.html';
      } else {
        alert('Usuário ou senha incorretos');
      }
    });
