// проверка авторизации
function checkAuth() {
  var t = localStorage.getItem('token');
  if (!t) window.location = 'auth.html';
  // показываем имя
  var u = localStorage.getItem('user');
  document.getElementById('user-name').textContent = u || 'гость';
}
// статус сети
function netStatus() {
  var s = document.getElementById('net-status');
  s.textContent = navigator.onLine ? 'онлайн' : 'офлайн';
  s.className = navigator.onLine ? 'online' : 'offline';
}
document.getElementById('logout').onclick = function() {
  localStorage.clear();
  window.location = 'auth.html';
};
// инициализация
window.onload = function() {
  checkAuth();
  netStatus();
  window.addEventListener('online', netStatus);
  window.addEventListener('offline', netStatus);
};