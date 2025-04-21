// кешируемые файлы
var files = [
  '/',
  'index.html',
  'auth.html',
  'style.css',
  'js/app.js'
];
// установка
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll(files);
    })
  );
});
// обработка запросов
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      return r || fetch(e.request);
    })
  );
});