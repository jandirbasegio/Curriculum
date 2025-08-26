document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('toggle-theme');
  const messageBtn = document.getElementById('message-btn');
  const body = document.body;

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('tema-escuro');

    // Troca o ícone
    if (body.classList.contains('tema-escuro')) {
      themeToggle.textContent = '☀️';
    } else {
      themeToggle.textContent = '🌙';
    }
  });

   messageBtn.addEventListener('click', () => {
    alert('Obrigado(a) pelo seu interesse! Atualmente estou buscando novas oportunidades para entrar em uma equipe de desenvolvimento, porém aberto também a possibilidade de prestar Suporte técnico ou áreas relacionadas (Onde já tenho experiência!), e adoraria saber como posso agregar valor ao seu time."');
  });
});