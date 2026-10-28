// Service worker: makes the calendar installable and usable offline.
// Pages are fetched network-first so updates show up; the cache is the offline fallback.
const CACHE = "adventskalender-v3";
const FILES = [
  "./", "./index.html", "./manifest.webmanifest",
  "./icons/icon.svg", "./icons/icon-192.png", "./icons/icon-512.png",
  "./icons/icon-maskable-512.png", "./icons/apple-touch-icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== location.origin) return;
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy));
        return response;
      })
      // Offline: cached file, and for page loads (any ?query) the cached calendar page
      .catch(async () =>
        (await caches.match(event.request, { ignoreSearch: true })) ||
        (event.request.mode === "navigate" ? caches.match("./") : Response.error()))
  );
});
