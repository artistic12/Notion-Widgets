// JavaScript to add a hover effect to scale icons
document.querySelectorAll('.app').forEach(app => {
  app.addEventListener('mouseover', () => {
    app.style.transform = 'scale(1.1)';
  });
  app.addEventListener('mouseout', () => {
    app.style.transform = 'scale(1)';
  });
});
