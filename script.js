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
    alert('Seja bem vindo ao meu currículo!! 🚀🚀🚀');
  });
});