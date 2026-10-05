const CACHE_NAME = "apz-cache-v1";
const urlsToCache = ["/", "/index.html", "/manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});

// Push Notifications
self.addEventListener("push", (event) => {
  const data = event.data.json();
  self.registration.showNotification("APZ Alert", {
    body: data.message,
    icon: "/icons/icon-192.png"
  });
});
