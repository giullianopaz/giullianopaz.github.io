// Service Worker for giullianopaz.github.io PWA
const CACHE_NAME = 'gpaz-v4';
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
];

// Install: cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch: network-first strategy for pages and /games/aula-em-casa/, cache-first for other assets
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (url.origin === self.location.origin && url.pathname.startsWith('/games/bandeiras-falantes/')) {
    event.respondWith(fetch(request));
    return;
  }

  const isAulas = url.origin === self.location.origin && url.pathname.startsWith('/games/aula-em-casa/');

  if (request.mode === 'navigate' || isAulas) {
    // Network first for HTML pages and /games/aula-em-casa/ resources
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() => caches.match(request))
    );
  } else {
    // Cache first for static assets
    event.respondWith(
      caches.match(request).then((cached) => {
        return cached || fetch(request).then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        });
      })
    );
  }
});
