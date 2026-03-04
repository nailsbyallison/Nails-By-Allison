const CACHE = "nba-v3";

const ASSETS = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/Rose%20Gold%20Black%20Elegant%20Luxury%20Circle%20Beauty%20Logo_20250608_164322_0000.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
