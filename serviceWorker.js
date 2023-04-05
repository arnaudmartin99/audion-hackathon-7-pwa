const cacheName = "v1";
const requestOrURL = [
  ".",
  "index.html",
  "css/style.css",
  "js/app.js",
  "images/podcast.png",
  "images/music.png",
  "images/radio.png",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(requestOrURL);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
