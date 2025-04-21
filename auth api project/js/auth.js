var authApi = {
  login: function(em, pw) {
    return new Promise(function(res) {
      setTimeout(() => {
        res({ 
          token: 'fake-jwt-token',
          user: em 
        });
      }, 300);
    });
  }
};
// обработка формы входа
document.getElementById('login-form').onsubmit = async function(e) {
  e.preventDefault();
  var em = document.getElementById('email').value;
  var pw = document.getElementById('pass').value;
  // проверка пароля
  if (pw.length < 6) {
    document.getElementById('error').textContent = 'пароль слишком короткий';
    return;
  }
  try {
    var data = await authApi.login(em, pw);
    // сохраняем токен
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', data.user);
    window.location = 'index.html';
  } catch {
    document.getElementById('error').textContent = 'ошибка входа';
  }
};