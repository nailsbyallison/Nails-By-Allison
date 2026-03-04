self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('nba-v1').then((cache) => cache.addAll([
      './',
      './index.html',
      './Logo.png'
    ]))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
