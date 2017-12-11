importScripts('js/vendor/cache-polyfill.js');

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('pimgento').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/style.css',
                '/js/main.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);

        })
    );
});