// Self-destructing service worker.
// Earlier Create React App builds may have registered a caching worker at this URL.
// Browsers re-check this file, find this version, and it removes itself and its caches
// so returning visitors get the current site instead of a stale precached copy.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((client) => client.navigate(client.url));
    })(),
  );
});
